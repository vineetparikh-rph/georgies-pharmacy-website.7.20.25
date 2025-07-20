import fetch from "node-fetch";

interface ABProduct {
  itemNumber: string;
  upc: string;
  description: string;
  manufacturer: string;
  ndcNumber: string;
  packageSize: string;
  unitPrice: number;
  contractPrice?: number;
  availability: "available" | "limited" | "unavailable";
  category: string;
  therapeuticClass?: string;
  inventoryQuantity: number;
  minimumOrderQuantity: number;
  imageUrl?: string;
}

interface ABSearchRequest {
  query?: string;
  category?: string;
  manufacturer?: string;
  limit?: number;
  offset?: number;
}

interface ABOrderRequest {
  customerId: string;
  items: Array<{
    itemNumber: string;
    quantity: number;
    unitPrice: number;
  }>;
  shippingAddress: {
    name: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zipCode: string;
    phone?: string;
  };
  paymentReference: string; // Reference to processed payment
  deliveryMethod: "standard" | "expedited" | "pickup";
}

interface ABOrderResponse {
  orderId: string;
  status: "pending" | "confirmed" | "processing" | "shipped" | "delivered";
  totalAmount: number;
  estimatedDelivery: string;
  trackingNumber?: string;
}

export class AmerisourceBergenService {
  private baseUrl: string;
  private apiKey: string;
  private customerId: string;
  private environment: "sandbox" | "production";

  constructor() {
    this.baseUrl =
      process.env.AB_API_BASE_URL || "https://api.amerisourcebergen.com/v1";
    this.apiKey = process.env.AB_API_KEY || "";
    this.customerId = process.env.AB_CUSTOMER_ID || "";
    this.environment =
      (process.env.AB_ENVIRONMENT as "sandbox" | "production") || "sandbox";
  }

  /**
   * Check if AmerisourceBergen credentials are configured
   */
  isConfigured(): boolean {
    return !!(this.apiKey && this.customerId);
  }

  /**
   * Search products in AmerisourceBergen catalog
   */
  async searchProducts(searchRequest: ABSearchRequest): Promise<ABProduct[]> {
    if (!this.isConfigured()) {
      throw new Error(
        "AmerisourceBergen credentials not configured. Please set AB_API_KEY and AB_CUSTOMER_ID environment variables.",
      );
    }

    try {
      const queryParams = new URLSearchParams();
      if (searchRequest.query) queryParams.append("query", searchRequest.query);
      if (searchRequest.category)
        queryParams.append("category", searchRequest.category);
      if (searchRequest.manufacturer)
        queryParams.append("manufacturer", searchRequest.manufacturer);
      queryParams.append("limit", (searchRequest.limit || 100).toString());
      queryParams.append("offset", (searchRequest.offset || 0).toString());

      const response = await fetch(
        `${this.baseUrl}/products/search?${queryParams}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            "Content-Type": "application/json",
            "X-Customer-ID": this.customerId,
          },
        },
      );

      if (!response.ok) {
        throw new Error(
          `AmerisourceBergen API error: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();
      return this.processProducts(data.products || []);
    } catch (error) {
      console.error("Error searching AmerisourceBergen products:", error);
      throw error;
    }
  }

  /**
   * Get featured/popular OTC products
   */
  async getFeaturedProducts(limit = 100): Promise<ABProduct[]> {
    return this.searchProducts({
      category: "OTC",
      limit,
    });
  }

  /**
   * Get product details by item number
   */
  async getProductDetails(itemNumber: string): Promise<ABProduct | null> {
    if (!this.isConfigured()) {
      throw new Error("AmerisourceBergen credentials not configured");
    }

    try {
      const response = await fetch(`${this.baseUrl}/products/${itemNumber}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
          "X-Customer-ID": this.customerId,
        },
      });

      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error(
          `AmerisourceBergen API error: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();
      return this.processProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
      throw error;
    }
  }

  /**
   * Check product availability and pricing
   */
  async checkAvailability(itemNumbers: string[]): Promise<ABProduct[]> {
    if (!this.isConfigured()) {
      throw new Error("AmerisourceBergen credentials not configured");
    }

    try {
      const response = await fetch(`${this.baseUrl}/products/availability`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
          "X-Customer-ID": this.customerId,
        },
        body: JSON.stringify({ itemNumbers }),
      });

      if (!response.ok) {
        throw new Error(
          `AmerisourceBergen API error: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();
      return this.processProducts(data.products || []);
    } catch (error) {
      console.error("Error checking product availability:", error);
      throw error;
    }
  }

  /**
   * Place order with AmerisourceBergen
   */
  async placeOrder(orderRequest: ABOrderRequest): Promise<ABOrderResponse> {
    if (!this.isConfigured()) {
      throw new Error("AmerisourceBergen credentials not configured");
    }

    try {
      const response = await fetch(`${this.baseUrl}/orders`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
          "X-Customer-ID": this.customerId,
        },
        body: JSON.stringify({
          ...orderRequest,
          customerId: this.customerId,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `AmerisourceBergen order error: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error placing AmerisourceBergen order:", error);
      throw error;
    }
  }

  /**
   * Get order status
   */
  async getOrderStatus(orderId: string): Promise<ABOrderResponse> {
    if (!this.isConfigured()) {
      throw new Error("AmerisourceBergen credentials not configured");
    }

    try {
      const response = await fetch(`${this.baseUrl}/orders/${orderId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
          "X-Customer-ID": this.customerId,
        },
      });

      if (!response.ok) {
        throw new Error(
          `AmerisourceBergen API error: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching order status:", error);
      throw error;
    }
  }

  /**
   * Process raw AB products into standardized format
   */
  private processProducts(abProducts: any[]): ABProduct[] {
    return abProducts.map((product) => this.processProduct(product));
  }

  /**
   * Process individual AB product
   */
  private processProduct(product: any): ABProduct {
    return {
      itemNumber: product.itemNumber || product.id,
      upc: product.upc || "",
      description: product.description || product.name || "",
      manufacturer: product.manufacturer || product.brand || "",
      ndcNumber: product.ndcNumber || "",
      packageSize: product.packageSize || "",
      unitPrice: parseFloat(product.unitPrice || product.price || "0"),
      contractPrice: product.contractPrice
        ? parseFloat(product.contractPrice)
        : undefined,
      availability: product.availability || "available",
      category: this.categorizeProduct(product),
      therapeuticClass: product.therapeuticClass,
      inventoryQuantity: parseInt(product.inventoryQuantity || "0"),
      minimumOrderQuantity: parseInt(product.minimumOrderQuantity || "1"),
      imageUrl: product.imageUrl || this.getDefaultImage(product.category),
    };
  }

  /**
   * Categorize product based on therapeutic class and description
   */
  private categorizeProduct(product: any): string {
    const description = (product.description || "").toLowerCase();
    const therapeuticClass = (product.therapeuticClass || "").toLowerCase();

    if (
      description.includes("pain") ||
      description.includes("analgesic") ||
      therapeuticClass.includes("analgesic")
    ) {
      return "pain-relief";
    }
    if (
      description.includes("vitamin") ||
      description.includes("supplement") ||
      therapeuticClass.includes("vitamin")
    ) {
      return "vitamins";
    }
    if (
      description.includes("cold") ||
      description.includes("flu") ||
      description.includes("cough")
    ) {
      return "cold-flu";
    }
    if (
      description.includes("allergy") ||
      description.includes("antihistamine")
    ) {
      return "allergy";
    }
    if (description.includes("bandage") || description.includes("first aid")) {
      return "first-aid";
    }
    if (
      description.includes("antacid") ||
      description.includes("digestive") ||
      therapeuticClass.includes("gastrointestinal")
    ) {
      return "digestive";
    }
    if (description.includes("skin") || description.includes("topical")) {
      return "skincare";
    }
    if (description.includes("baby") || description.includes("infant")) {
      return "baby";
    }

    return "general";
  }

  /**
   * Get default product image based on category
   */
  private getDefaultImage(category: string): string {
    const imageMap: Record<string, string> = {
      "pain-relief":
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
      vitamins:
        "https://images.unsplash.com/photo-1556909114-0a5e16e77ff6?w=400",
      "cold-flu":
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
      allergy:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
      "first-aid":
        "https://images.unsplash.com/photo-1603398938093-6b77de70db2c?w=400",
      digestive:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400",
      skincare:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400",
      baby: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
    };

    return (
      imageMap[category] ||
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400"
    );
  }

  /**
   * Convert AB product to our standard Product interface
   */
  convertToStandardProduct(abProduct: ABProduct): any {
    const finalPrice = abProduct.contractPrice || abProduct.unitPrice;
    const savings =
      abProduct.contractPrice && abProduct.unitPrice > abProduct.contractPrice
        ? abProduct.unitPrice - abProduct.contractPrice
        : 0;

    return {
      id: abProduct.itemNumber,
      title: abProduct.description,
      description: `${abProduct.manufacturer} - ${abProduct.packageSize}`,
      price: `$${finalPrice.toFixed(2)}`,
      comparePrice:
        savings > 0 ? `$${abProduct.unitPrice.toFixed(2)}` : undefined,
      image: abProduct.imageUrl,
      category: abProduct.category,
      brand: abProduct.manufacturer,
      rating: 4.5, // Default rating for AB products
      reviewCount: Math.floor(Math.random() * 100) + 20,
      inStock:
        abProduct.availability === "available" &&
        abProduct.inventoryQuantity > 0,
      shopifyUrl: `/otc-products/buy/${abProduct.itemNumber}`, // Internal purchase flow
      abItemNumber: abProduct.itemNumber,
      ndcNumber: abProduct.ndcNumber,
      minimumOrderQuantity: abProduct.minimumOrderQuantity,
      availability: abProduct.availability,
    };
  }
}

export const amerisourceBergenService = new AmerisourceBergenService();
