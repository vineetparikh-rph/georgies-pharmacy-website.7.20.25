import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { ArrowLeft, CreditCard, Package, MapPin, Phone } from "lucide-react";

const checkoutFormSchema = z.object({
  quantity: z.number().min(1, "Quantity must be at least 1"),
  deliveryMethod: z.enum(["pickup", "delivery"], {
    required_error: "Please select a delivery method",
  }),
  customerInfo: z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(10, "Valid phone number is required"),
  }),
  shippingAddress: z.object({
    address1: z.string().min(1, "Address is required"),
    address2: z.string().optional(),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    zipCode: z.string().min(5, "Valid ZIP code is required"),
  }).optional(),
});

type CheckoutForm = z.infer<typeof checkoutFormSchema>;

export default function Checkout() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location.split('?')[1] || '');
  const productId = searchParams.get("product");
  const store = searchParams.get("store");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      quantity: 1,
      deliveryMethod: "pickup",
      customerInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
      shippingAddress: {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
      },
    },
  });

  const deliveryMethod = form.watch("deliveryMethod");

  // Fetch product details
  const { data: product, isLoading: productLoading } = useQuery({
    queryKey: ['/api/otc-products/details', productId],
    queryFn: async () => {
      const res = await fetch(`/api/otc-products/details/${productId}?store=${store}`);
      if (!res.ok) throw new Error('Failed to fetch product details');
      return res.json();
    },
    enabled: !!(productId && store),
  });

  // Process payment and order
  const orderMutation = useMutation({
    mutationFn: async (data: CheckoutForm) => {
      const orderData = {
        productId,
        store,
        ...data,
        totalAmount: calculateTotal(),
      };

      const res = await fetch('/api/otc-products/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      if (!res.ok) throw new Error('Failed to process order');
      return res.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Order Successful!",
        description: `Your order #${data.orderId} has been placed. You'll receive confirmation via email.`,
      });
      queryClient.invalidateQueries({ queryKey: ['/api/orders'] });
      // Redirect to confirmation page
      window.location.href = `/order-confirmation?orderId=${data.orderId}`;
    },
    onError: (error: any) => {
      toast({
        title: "Order Failed",
        description: error.message || "There was an error processing your order.",
        variant: "destructive",
      });
    },
  });

  const calculateTotal = () => {
    if (!product) return 0;
    const quantity = form.getValues("quantity");
    const unitPrice = parseFloat(product.price.replace('$', ''));
    const subtotal = unitPrice * quantity;
    const tax = subtotal * 0.08; // 8% tax
    const deliveryFee = deliveryMethod === "delivery" ? 5.99 : 0;
    return subtotal + tax + deliveryFee;
  };

  const stores = [
    { value: "family", label: "Family Pharmacy", address: "123 Main St, New Jersey", phone: "(908) 925-8090" },
    { value: "specialty", label: "Specialty Pharmacy", address: "456 Oak Ave, New Jersey", phone: "(908) 345-5030" },
    { value: "parlin", label: "Parlin Pharmacy", address: "789 Pine Rd, Parlin, NJ", phone: "(407) 641-8434" },
    { value: "outpatient", label: "Outpatient Pharmacy", address: "321 Elm St, New Jersey", phone: "(609) 726-5810" }
  ];

  const selectedStore = stores.find(s => s.value === store);

  if (!productId || !store) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <CardHeader>
            <CardTitle className="text-red-600">Invalid Checkout</CardTitle>
            <CardDescription>
              Product or store information is missing. Please return to the products page.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => window.location.href = '/otc-products'}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (productLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <CardHeader>
            <CardTitle className="text-red-600">Product Not Found</CardTitle>
            <CardDescription>
              The requested product could not be found.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => window.location.href = '/otc-products'}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={() => window.location.href = '/otc-products'}
            variant="ghost"
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
          <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
          <p className="text-slate-600 mt-2">Complete your purchase from {selectedStore?.label}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{product.title}</h3>
                    <p className="text-xs text-slate-600">{product.brand}</p>
                    <p className="text-sm font-bold text-primary">{product.price}</p>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Quantity</span>
                    <span>{form.watch("quantity")}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${(parseFloat(product.price.replace('$', '')) * form.watch("quantity")).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${(parseFloat(product.price.replace('$', '')) * form.watch("quantity") * 0.08).toFixed(2)}</span>
                  </div>
                  {deliveryMethod === "delivery" && (
                    <div className="flex justify-between text-sm">
                      <span>Delivery Fee</span>
                      <span>$5.99</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold border-t pt-2">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>

                {/* Store Info */}
                <div className="border-t pt-4">
                  <h4 className="font-medium text-sm mb-2 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Pickup Location
                  </h4>
                  <div className="text-xs text-slate-600">
                    <p className="font-medium">{selectedStore?.label}</p>
                    <p>{selectedStore?.address}</p>
                    <p className="flex items-center mt-1">
                      <Phone className="h-3 w-3 mr-1" />
                      {selectedStore?.phone}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit((data) => orderMutation.mutate(data))} className="space-y-6">
                {/* Product Options */}
                <Card>
                  <CardHeader>
                    <CardTitle>Product Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FormField
                      control={form.control}
                      name="quantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quantity</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min="1"
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                {/* Delivery Method */}
                <Card>
                  <CardHeader>
                    <CardTitle>Delivery Method</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FormField
                      control={form.control}
                      name="deliveryMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select delivery method" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pickup">
                                  Pickup at {selectedStore?.label} (FREE)
                                </SelectItem>
                                <SelectItem value="delivery">
                                  Delivery (+$5.99)
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                {/* Customer Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Information</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="customerInfo.firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="customerInfo.lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="customerInfo.email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="customerInfo.phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                {/* Shipping Address (only for delivery) */}
                {deliveryMethod === "delivery" && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Delivery Address</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <FormField
                        control={form.control}
                        name="shippingAddress.address1"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address Line 1</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="shippingAddress.address2"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address Line 2 (Optional)</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="shippingAddress.city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="shippingAddress.state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="shippingAddress.zipCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>ZIP Code</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Submit Button */}
                <Card>
                  <CardContent className="pt-6">
                    <Button
                      type="submit"
                      disabled={orderMutation.isPending}
                      className="w-full"
                      size="lg"
                    >
                      {orderMutation.isPending ? (
                        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                      ) : (
                        <CreditCard className="h-5 w-5 mr-2" />
                      )}
                      {orderMutation.isPending ? "Processing..." : `Pay $${calculateTotal().toFixed(2)}`}
                    </Button>
                    <p className="text-xs text-slate-600 text-center mt-2">
                      Secure payment processing • Your order will be automatically sent to AmerisourceBergen
                    </p>
                  </CardContent>
                </Card>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}