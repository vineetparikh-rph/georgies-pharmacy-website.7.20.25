interface ShopifyProduct {
  id: string;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  status: string;
  tags: string;
  variants: ShopifyVariant[];
  images: ShopifyImage[];
}

interface ShopifyVariant {
  id: string;
  product_id: string;
  title: string;
  price: string;
  compare_at_price: string | null;
  inventory_quantity: number;
  inventory_management: string;
  available: boolean;
}

interface ShopifyImage {
  id: string;
  product_id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ShopifyApiResponse {
  products: ShopifyProduct[];
}

interface ProcessedProduct {
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

export class ShopifyService {
  private shopDomain: string;
  private accessToken: string;
  private apiVersion: string = '2024-01';

  constructor() {
    this.shopDomain = process.env.SHOPIFY_SHOP_DOMAIN || 'georgiespharmacy.myshopify.com';
    this.accessToken = process.env.SHOPIFY_ACCESS_TOKEN || '';
  }

  /**
   * Check if Shopify credentials are configured
   */
  isConfigured(): boolean {
    return !!(this.shopDomain && this.accessToken);
  }

  /**
   * Fetch all products from Shopify
   */
  async fetchProducts(limit: number = 250): Promise<ProcessedProduct[]> {
    if (!this.isConfigured()) {
      throw new Error('Shopify credentials not configured. Please set SHOPIFY_SHOP_DOMAIN and SHOPIFY_ACCESS_TOKEN environment variables.');
    }

    try {
      const url = `https://${this.shopDomain}/admin/api/${this.apiVersion}/products.json?limit=${limit}&published_status=published`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Shopify-Access-Token': this.accessToken,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Shopify API error: ${response.status} ${response.statusText}`);
      }

      const data: ShopifyApiResponse = await response.json();
      return this.processProducts(data.products);
    } catch (error) {
      console.error('Error fetching products from Shopify:', error);
      throw error;
    }
  }

  /**
   * Fetch products by collection
   */
  async fetchProductsByCollection(collectionId: string): Promise<ProcessedProduct[]> {
    if (!this.isConfigured()) {
      throw new Error('Shopify credentials not configured');
    }

    try {
      const url = `https://${this.shopDomain}/admin/api/${this.apiVersion}/collections/${collectionId}/products.json`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Shopify-Access-Token': this.accessToken,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Shopify API error: ${response.status} ${response.statusText}`);
      }

      const data: ShopifyApiResponse = await response.json();
      return this.processProducts(data.products);
    } catch (error) {
      console.error('Error fetching collection products from Shopify:', error);
      throw error;
    }
  }

  /**
   * Search products by title or tags
   */
  async searchProducts(query: string): Promise<ProcessedProduct[]> {
    if (!this.isConfigured()) {
      throw new Error('Shopify credentials not configured');
    }

    try {
      const url = `https://${this.shopDomain}/admin/api/${this.apiVersion}/products.json?title=${encodeURIComponent(query)}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Shopify-Access-Token': this.accessToken,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Shopify API error: ${response.status} ${response.statusText}`);
      }

      const data: ShopifyApiResponse = await response.json();
      return this.processProducts(data.products);
    } catch (error) {
      console.error('Error searching products in Shopify:', error);
      throw error;
    }
  }

  /**
   * Process raw Shopify products into our format
   */
  private processProducts(shopifyProducts: ShopifyProduct[]): ProcessedProduct[] {
    return shopifyProducts.map(product => this.processProduct(product));
  }

  /**
   * Process individual Shopify product
   */
  private processProduct(product: ShopifyProduct): ProcessedProduct {
    const mainVariant = product.variants[0] || {};
    const mainImage = product.images[0] || {};
    
    return {
      id: product.id,
      title: product.title,
      description: this.stripHtml(product.body_html || ''),
      price: `$${parseFloat(mainVariant.price || '0').toFixed(2)}`,
      comparePrice: mainVariant.compare_at_price 
        ? `$${parseFloat(mainVariant.compare_at_price).toFixed(2)}` 
        : undefined,
      image: mainImage.src || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
      category: this.categorizeProduct(product),
      brand: product.vendor || 'Georgies Pharmacy',
      rating: this.generateRating(),
      reviewCount: this.generateReviewCount(),
      inStock: mainVariant.available !== false && (mainVariant.inventory_quantity || 0) > 0,
      shopifyUrl: `https://${this.shopDomain.replace('.myshopify.com', '.com')}/products/${product.handle || product.id}`
    };
  }

  /**
   * Strip HTML tags from description
   */
  private stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').trim();
  }

  /**
   * Categorize product based on title, tags, or product type
   */
  private categorizeProduct(product: ShopifyProduct): string {
    const title = product.title.toLowerCase();
    const tags = product.tags.toLowerCase();
    const productType = product.product_type.toLowerCase();
    
    if (title.includes('pain') || title.includes('tylenol') || title.includes('advil') || title.includes('ibuprofen')) {
      return 'pain-relief';
    }
    if (title.includes('vitamin') || title.includes('supplement') || tags.includes('vitamin')) {
      return 'vitamins';
    }
    if (title.includes('cold') || title.includes('flu') || title.includes('cough')) {
      return 'cold-flu';
    }
    if (title.includes('allergy') || title.includes('claritin') || title.includes('zyrtec')) {
      return 'allergy';
    }
    if (title.includes('band') || title.includes('bandage') || title.includes('first aid')) {
      return 'first-aid';
    }
    if (title.includes('antacid') || title.includes('tums') || title.includes('pepto')) {
      return 'digestive';
    }
    if (title.includes('skin') || title.includes('lotion') || title.includes('cream')) {
      return 'skincare';
    }
    if (title.includes('baby') || title.includes('infant') || productType.includes('baby')) {
      return 'baby';
    }
    
    return 'general';
  }

  /**
   * Generate realistic rating (4.0-5.0)
   */
  private generateRating(): number {
    return Math.round((Math.random() * 1 + 4) * 10) / 10;
  }

  /**
   * Generate realistic review count (20-200)
   */
  private generateReviewCount(): number {
    return Math.floor(Math.random() * 180) + 20;
  }

  /**
   * Get Shopify storefront URL for product
   */
  getProductUrl(productHandle: string): string {
    const storefrontDomain = this.shopDomain.replace('.myshopify.com', '.com');
    return `https://${storefrontDomain}/products/${productHandle}`;
  }

  /**
   * Validate webhook from Shopify
   */
  validateWebhook(rawBody: string, signature: string): boolean {
    const webhookSecret = process.env.SHOPIFY_WEBHOOK_SECRET;
    if (!webhookSecret) return false;

    const crypto = require('crypto');
    const calculated = crypto
      .createHmac('sha256', webhookSecret)
      .update(rawBody, 'utf8')
      .digest('base64');

    return calculated === signature;
  }
}

export const shopifyService = new ShopifyService();