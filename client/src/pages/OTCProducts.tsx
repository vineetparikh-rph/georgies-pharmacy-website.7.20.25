import { useState, useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import {
  ShoppingCart,
  Search,
  Filter,
  Star,
  Package,
  Truck,
  Shield,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'wouter';
import MultiPlatformManager from '@/components/MultiPlatformManager';

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  comparePrice?: string;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  shopifyUrl: string;
}

export default function OTCProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStore, setSelectedStore] = useState('');
  const [showStoreSelection, setShowStoreSelection] = useState(true);
  const { toast } = useToast();

  const stores = [
    {
      value: 'family',
      label: 'Georgies Family Pharmacy',
      address: '332 W. St. Georges Avenue, Linden, NJ 07036-5638',
      phone: '(908) 925-4567',
    },
    {
      value: 'outpatient',
      label: 'Georgies Outpatient Pharmacy',
      address: '6 Earlin Drive, Suite 130, Browns Mills, NJ 08015-1768',
      phone: '(609) 726-5800',
    },
    {
      value: 'parlin',
      label: 'Georgies Parlin Pharmacy',
      address: '499 Ernston Road, Parlin, NJ 08859-1406',
      phone: '(732) 952-3022',
    },
    {
      value: 'specialty',
      label: 'Georgies Specialty Pharmacy',
      address: '521 N Wood Avenue, Linden, NJ 07036-4146',
      phone: '(908) 925-4566',
    },
  ];

  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['/api/otc-products', selectedStore],
    queryFn: async () => {
      if (!selectedStore) return { products: [] };
      const res = await fetch(`/api/otc-products?store=${selectedStore}`);
      if (!res.ok) throw new Error('Failed to fetch products');
      return res.json();
    },
    enabled: !!selectedStore,
  });

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'pain-relief', label: 'Pain Relief' },
    { value: 'cold-flu', label: 'Cold & Flu' },
    { value: 'vitamins', label: 'Vitamins & Supplements' },
    { value: 'first-aid', label: 'First Aid' },
    { value: 'digestive', label: 'Digestive Health' },
    { value: 'skincare', label: 'Skincare' },
    { value: 'allergy', label: 'Allergy Relief' },
    { value: 'baby', label: 'Baby Care' },
  ];

  const products = response?.products || [];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [products, selectedCategory, searchTerm]);

  const handleAddToCart = (product: Product) => {
    if (!product.inStock) {
      toast({
        title: 'Out of Stock',
        description: 'This product is currently out of stock.',
        variant: 'destructive',
      });
      return;
    }

    // Navigate to checkout with product info
    window.location.href = `/checkout?product=${product.id}&store=${selectedStore}`;
  };

  const handleStoreSelection = (storeValue: string) => {
    setSelectedStore(storeValue);
    setShowStoreSelection(false);
  };

  // Store Selection Modal
  if (showStoreSelection) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto p-8">
          <Card className="p-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-slate-900 mb-4">
                Select Your Pharmacy Location
              </CardTitle>
              <CardDescription className="text-lg">
                Choose which Georgies Pharmacy location you'd like to shop from for OTC products
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {stores.map((store) => (
                <Button
                  key={store.value}
                  onClick={() => handleStoreSelection(store.value)}
                  variant="outline"
                  className="w-full p-6 h-auto flex flex-col items-start text-left hover:bg-primary hover:text-white transition-colors group"
                >
                  <div className="font-semibold text-lg text-primary group-hover:text-white">
                    {store.label}
                  </div>
                  <div className="text-sm opacity-70 group-hover:text-white">{store.address}</div>
                  <div className="text-sm opacity-70 mt-1 group-hover:text-white">
                    {store.phone}
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-slate-50">
      {/* Modern Hero Header */}
      <div className="relative bg-gradient-to-r from-red-800 via-red-900 to-red-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-4">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent leading-tight">
                  Premium OTC Products
                </h1>
                <p className="text-lg md:text-xl text-red-100 max-w-2xl">
                  Health & Wellness from {stores.find((s) => s.value === selectedStore)?.label}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button
                  onClick={() => setShowStoreSelection(true)}
                  variant="secondary"
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-300 whitespace-nowrap"
                >
                  <Package className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline hover:text-white">
                    {stores.find((s) => s.value === selectedStore)?.label}
                  </span>
                  <span className="sm:hidden hover:text-white">Change Store</span>
                </Button>
              </div>
            </div>

            {response?.source === 'AmerisourceBergen' && (
              <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                  <p className="text-green-100 font-semibold">
                    Live Inventory from AmerisourceBergen Wholesaler
                  </p>
                </div>
                <p className="text-green-200 text-sm">
                  Real-time pricing and availability • Automatic ordering after payment
                </p>
              </div>
            )}

            {/* Enhanced Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Package className="h-8 w-8 text-red-200 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Quality Products</h3>
                <p className="text-red-100 text-sm">
                  Trusted brands and pharmaceutical-grade quality
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Truck className="h-8 w-8 text-red-200 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                <p className="text-red-100 text-sm">
                  Same-day pickup or next-day delivery available
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Shield className="h-8 w-8 text-red-200 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Pharmacist Approved</h3>
                <p className="text-red-100 text-sm">
                  Expert-recommended health and wellness solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Search & Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 p-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Enhanced Search */}
            <div className="flex-1 w-full">
              <div className="relative group">
                <Search className="absolute left-4 top-4 h-5 w-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
                <Input
                  type="text"
                  placeholder="Search for products, brands, or conditions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-xl border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Stylized Category Filter */}
            <div className="w-full lg:w-80">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-14 px-4 rounded-xl border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/20 transition-all duration-300">
                  <div className="flex items-center">
                    <Filter className="h-5 w-5 mr-3 text-slate-500" />
                    <SelectValue placeholder="All Categories" />
                  </div>
                </SelectTrigger>
                <SelectContent className="rounded-xl border-slate-200">
                  {categories.map((category) => (
                    <SelectItem
                      key={category.value}
                      value={category.value}
                      className="py-3 px-4 hover:bg-red-50"
                    >
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-200">
            <span className="text-sm font-medium text-slate-600 mr-3">Quick filters:</span>
            {['Pain Relief', 'Vitamins', 'Cold & Flu', 'First Aid'].map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                onClick={() =>
                  setSelectedCategory(tag.toLowerCase().replace(' & ', '-').replace(' ', '-'))
                }
                className="rounded-full hover:bg-red-50 hover:border-red-300 transition-all duration-200"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Multi-Platform Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-gradient-to-r from-red-700 via-red-800 to-red-900 rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative p-8">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between text-white">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <RefreshCw className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Multi-Platform Sales</h3>
                  <p className="text-red-100 text-lg">
                    Reach millions of customers across Amazon, Uber, Instacart, DoorDash, and more
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Badge className="bg-green-500/80 backdrop-blur-sm text-white border-green-400/30 px-4 py-2 text-sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Multi-Channel Ready
                </Badge>
                <Button
                  variant="secondary"
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  View Platforms
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <Card key={index} className="animate-pulse">
                <div className="h-48 bg-slate-200 rounded-t-lg"></div>
                <CardContent className="p-4">
                  <div className="h-4 bg-slate-200 rounded mb-2"></div>
                  <div className="h-3 bg-slate-200 rounded mb-2"></div>
                  <div className="h-6 bg-slate-200 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-slate-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Package className="h-12 w-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">No products found</h3>
            <p className="text-slate-600 text-lg mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {product.comparePrice && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Save{' '}
                      {Math.round(
                        ((parseFloat(product.comparePrice.slice(1)) -
                          parseFloat(product.price.slice(1))) /
                          parseFloat(product.comparePrice.slice(1))) *
                          100
                      )}
                      %
                    </div>
                  )}

                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <div className="bg-white text-slate-800 px-4 py-2 rounded-full text-sm font-semibold">
                        Out of Stock
                      </div>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-3">
                  <div>
                    <CardTitle className="text-base font-semibold line-clamp-2 group-hover:text-primary transition-colors mb-1">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-600 font-medium">
                      {product.brand}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  <p className="text-sm text-slate-600 line-clamp-2">{product.description}</p>

                  {/* Enhanced Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-slate-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-slate-500 font-medium">
                        ({product.reviewCount})
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      {product.comparePrice && (
                        <span className="text-lg text-slate-400 line-through">
                          {product.comparePrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Enhanced Button */}
                  <Button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className="w-full h-12 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                    size="lg"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Multi-Platform Manager Section - Hidden from customers, admin access only */}
      {(process.env.NODE_ENV === 'development' ||
        window.location.search.includes('admin=true')) && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-yellow-800 text-sm font-medium">
              ⚠️ Admin Only - Multi-Platform Configuration (Hidden from customers)
            </p>
            <p className="text-yellow-600 text-xs mt-1">Access via: /otc-products?admin=true</p>
          </div>
          <MultiPlatformManager
            productId={filteredProducts[0]?.id || filteredProducts[0]?.abItemNumber}
            storeLocation={selectedStore}
          />
        </div>
      )}
    </div>
  );
}
