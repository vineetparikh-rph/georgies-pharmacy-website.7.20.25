import fetch from 'node-fetch';

interface PlatformProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  comparePrice?: number;
  sku: string;
  upc?: string;
  category: string;
  brand: string;
  images: string[];
  inventory: number;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
}

interface PlatformOrder {
  orderId: string;
  platform: string;
  customerId: string;
  items: Array<{
    sku: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  shippingAddress: {
    name: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zipCode: string;
    phone?: string;
  };
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
}

interface PlatformConfig {
  name: string;
  apiKey: string;
  sellerId: string;
  baseUrl: string;
  enabled: boolean;
}

interface InventoryUpdate {
  sku: string;
  quantity: number;
  platform: string;
}

export class MultiPlatformService {
  private platforms: Map<string, PlatformConfig> = new Map();

  constructor() {
    this.initializePlatforms();
  }

  private initializePlatforms() {
    // Amazon Seller Central
    this.platforms.set('amazon', {
      name: 'Amazon',
      apiKey: process.env.AMAZON_SP_API_ACCESS_KEY || '',
      sellerId: process.env.AMAZON_SELLER_ID || '',
      baseUrl: 'https://sellingpartnerapi-na.amazon.com',
      enabled: !!(process.env.AMAZON_SP_API_ACCESS_KEY && process.env.AMAZON_SELLER_ID)
    });

    // Uber Direct (for local delivery)
    this.platforms.set('uber', {
      name: 'Uber Direct',
      apiKey: process.env.UBER_DIRECT_API_KEY || '',
      sellerId: process.env.UBER_DIRECT_CUSTOMER_ID || '',
      baseUrl: 'https://api.uber.com/v1/customers',
      enabled: !!(process.env.UBER_DIRECT_API_KEY && process.env.UBER_DIRECT_CUSTOMER_ID)
    });

    // Instacart Partner API
    this.platforms.set('instacart', {
      name: 'Instacart',
      apiKey: process.env.INSTACART_API_KEY || '',
      sellerId: process.env.INSTACART_RETAILER_ID || '',
      baseUrl: 'https://connect.instacart.com/v2',
      enabled: !!(process.env.INSTACART_API_KEY && process.env.INSTACART_RETAILER_ID)
    });

    // DoorDash Drive
    this.platforms.set('doordash', {
      name: 'DoorDash',
      apiKey: process.env.DOORDASH_API_KEY || '',
      sellerId: process.env.DOORDASH_BUSINESS_ID || '',
      baseUrl: 'https://openapi.doordash.com',
      enabled: !!(process.env.DOORDASH_API_KEY && process.env.DOORDASH_BUSINESS_ID)
    });

    // Postmates (now part of Uber)
    this.platforms.set('postmates', {
      name: 'Postmates',
      apiKey: process.env.POSTMATES_API_KEY || '',
      sellerId: process.env.POSTMATES_CUSTOMER_ID || '',
      baseUrl: 'https://api.postmates.com/v1/customers',
      enabled: !!(process.env.POSTMATES_API_KEY && process.env.POSTMATES_CUSTOMER_ID)
    });
  }

  /**
   * Get all enabled platforms
   */
  getEnabledPlatforms(): PlatformConfig[] {
    return Array.from(this.platforms.values()).filter(platform => platform.enabled);
  }

  /**
   * Check if any platforms are configured
   */
  hasConfiguredPlatforms(): boolean {
    return this.getEnabledPlatforms().length > 0;
  }

  /**
   * Sync product to all enabled platforms
   */
  async syncProductToAllPlatforms(product: PlatformProduct, storeLocation: string): Promise<{ [platform: string]: any }> {
    const results: { [platform: string]: any } = {};
    const enabledPlatforms = this.getEnabledPlatforms();

    await Promise.all(enabledPlatforms.map(async (platform) => {
      try {
        const result = await this.syncProductToPlatform(product, platform.name.toLowerCase(), storeLocation);
        results[platform.name] = { success: true, data: result };
      } catch (error) {
        console.error(`Error syncing to ${platform.name}:`, error);
        results[platform.name] = { success: false, error: error.message };
      }
    }));

    return results;
  }

  /**
   * Sync product to specific platform
   */
  async syncProductToPlatform(product: PlatformProduct, platform: string, storeLocation: string): Promise<any> {
    const config = this.platforms.get(platform);
    if (!config || !config.enabled) {
      throw new Error(`Platform ${platform} is not configured or enabled`);
    }

    switch (platform) {
      case 'amazon':
        return this.syncToAmazon(product, config, storeLocation);
      case 'uber':
        return this.syncToUber(product, config, storeLocation);
      case 'instacart':
        return this.syncToInstacart(product, config, storeLocation);
      case 'doordash':
        return this.syncToDoorDash(product, config, storeLocation);
      case 'postmates':
        return this.syncToPostmates(product, config, storeLocation);
      default:
        throw new Error(`Unsupported platform: ${platform}`);
    }
  }

  /**
   * Update inventory across all platforms
   */
  async updateInventoryAllPlatforms(updates: InventoryUpdate[]): Promise<{ [platform: string]: any }> {
    const results: { [platform: string]: any } = {};
    const enabledPlatforms = this.getEnabledPlatforms();

    await Promise.all(enabledPlatforms.map(async (platform) => {
      try {
        const platformUpdates = updates.filter(update => 
          update.platform === 'all' || update.platform === platform.name.toLowerCase()
        );
        
        if (platformUpdates.length > 0) {
          const result = await this.updatePlatformInventory(platformUpdates, platform.name.toLowerCase());
          results[platform.name] = { success: true, data: result };
        }
      } catch (error) {
        console.error(`Error updating inventory on ${platform.name}:`, error);
        results[platform.name] = { success: false, error: error.message };
      }
    }));

    return results;
  }

  /**
   * Sync to Amazon Seller Central
   */
  private async syncToAmazon(product: PlatformProduct, config: PlatformConfig, storeLocation: string): Promise<any> {
    const amazonProduct = {
      productType: 'HEALTH_PERSONAL_CARE',
      requirements: {
        merchant_suggested_asin: product.id,
        product_name: [{ value: product.title, language_tag: 'en_US' }],
        brand: [{ value: product.brand, language_tag: 'en_US' }],
        manufacturer: [{ value: product.brand, language_tag: 'en_US' }],
        product_description: [{ value: product.description, language_tag: 'en_US' }],
        bullet_point: [{ value: product.description, language_tag: 'en_US' }],
        main_product_image_locator: [{ media_location: product.images[0] }],
        other_product_image_locator: product.images.slice(1, 9).map(img => ({ media_location: img })),
        product_site_launch_date: new Date().toISOString().split('T')[0],
        list_price: [{ currency: 'USD', amount: product.price }]
      }
    };

    const response = await fetch(`${config.baseUrl}/listings/2021-08-01/items/${config.sellerId}/${product.sku}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json',
        'x-amz-access-token': config.apiKey
      },
      body: JSON.stringify({ productType: 'HEALTH_PERSONAL_CARE', requirements: amazonProduct.requirements })
    });

    if (!response.ok) {
      throw new Error(`Amazon API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Sync to Uber Direct
   */
  private async syncToUber(product: PlatformProduct, config: PlatformConfig, storeLocation: string): Promise<any> {
    const uberProduct = {
      external_id: product.sku,
      name: product.title,
      description: product.description,
      price: Math.round(product.price * 100), // Price in cents
      currency: 'USD',
      image_url: product.images[0],
      category: product.category,
      available: product.inventory > 0,
      store_location: storeLocation
    };

    const response = await fetch(`${config.baseUrl}/${config.sellerId}/stores/${storeLocation}/menu/items`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(uberProduct)
    });

    if (!response.ok) {
      throw new Error(`Uber API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Sync to Instacart
   */
  private async syncToInstacart(product: PlatformProduct, config: PlatformConfig, storeLocation: string): Promise<any> {
    const instacartProduct = {
      external_id: product.sku,
      name: product.title,
      description: product.description,
      price: product.price.toString(),
      compare_at_price: product.comparePrice?.toString(),
      image_urls: product.images,
      upc: product.upc,
      brand: product.brand,
      size: product.dimensions ? `${product.dimensions.length}x${product.dimensions.width}x${product.dimensions.height}` : null,
      weight: product.weight ? product.weight.toString() : null,
      available: product.inventory > 0,
      inventory_count: product.inventory,
      category: product.category
    };

    const response = await fetch(`${config.baseUrl}/retailers/${config.sellerId}/locations/${storeLocation}/items`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(instacartProduct)
    });

    if (!response.ok) {
      throw new Error(`Instacart API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Sync to DoorDash
   */
  private async syncToDoorDash(product: PlatformProduct, config: PlatformConfig, storeLocation: string): Promise<any> {
    const doorDashProduct = {
      external_id: product.sku,
      name: product.title,
      description: product.description,
      price: Math.round(product.price * 100), // Price in cents
      image_url: product.images[0],
      category_id: product.category,
      is_available: product.inventory > 0,
      merchant_supplied_id: product.sku
    };

    const response = await fetch(`${config.baseUrl}/developer/v1/businesses/${config.sellerId}/stores/${storeLocation}/menu/items`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(doorDashProduct)
    });

    if (!response.ok) {
      throw new Error(`DoorDash API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Sync to Postmates
   */
  private async syncToPostmates(product: PlatformProduct, config: PlatformConfig, storeLocation: string): Promise<any> {
    // Postmates uses similar API to Uber since acquisition
    return this.syncToUber(product, config, storeLocation);
  }

  /**
   * Update inventory on specific platform
   */
  private async updatePlatformInventory(updates: InventoryUpdate[], platform: string): Promise<any> {
    const config = this.platforms.get(platform);
    if (!config || !config.enabled) {
      throw new Error(`Platform ${platform} is not configured`);
    }

    // Implementation varies by platform
    switch (platform) {
      case 'amazon':
        return this.updateAmazonInventory(updates, config);
      case 'instacart':
        return this.updateInstacartInventory(updates, config);
      default:
        console.log(`Inventory updates not implemented for ${platform}`);
        return { message: `Inventory updates not implemented for ${platform}` };
    }
  }

  /**
   * Update Amazon inventory
   */
  private async updateAmazonInventory(updates: InventoryUpdate[], config: PlatformConfig): Promise<any> {
    const inventoryUpdates = updates.map(update => ({
      sku: update.sku,
      quantity: update.quantity,
      fulfillment_channel: 'DEFAULT'
    }));

    const response = await fetch(`${config.baseUrl}/fba/inventory/v1/summaries`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inventoryUpdates })
    });

    if (!response.ok) {
      throw new Error(`Amazon inventory update error: ${response.status}`);
    }

    return response.json();
  }

  /**
   * Update Instacart inventory
   */
  private async updateInstacartInventory(updates: InventoryUpdate[], config: PlatformConfig): Promise<any> {
    const results = await Promise.all(updates.map(async (update) => {
      const response = await fetch(`${config.baseUrl}/retailers/${config.sellerId}/items/${update.sku}/inventory`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          inventory_count: update.quantity,
          available: update.quantity > 0
        })
      });

      return {
        sku: update.sku,
        success: response.ok,
        status: response.status
      };
    }));

    return results;
  }

  /**
   * Convert AmerisourceBergen product to platform format
   */
  convertABProductToPlatformProduct(abProduct: any, storeLocation: string): PlatformProduct {
    return {
      id: abProduct.itemNumber,
      title: abProduct.description,
      description: `${abProduct.manufacturer} - ${abProduct.packageSize}`,
      price: abProduct.contractPrice || abProduct.unitPrice,
      comparePrice: abProduct.unitPrice > (abProduct.contractPrice || 0) ? abProduct.unitPrice : undefined,
      sku: `${storeLocation}-${abProduct.itemNumber}`,
      upc: abProduct.upc,
      category: abProduct.category,
      brand: abProduct.manufacturer,
      images: [abProduct.imageUrl || this.getDefaultImage(abProduct.category)],
      inventory: abProduct.inventoryQuantity,
      weight: 1.0, // Default weight in lbs
      dimensions: {
        length: 6,
        width: 4,
        height: 8
      }
    };
  }

  /**
   * Get default image for category
   */
  private getDefaultImage(category: string): string {
    const imageMap: Record<string, string> = {
      'pain-relief': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
      'vitamins': 'https://images.unsplash.com/photo-1556909114-0a5e16e77ff6?w=400',
      'cold-flu': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
      'allergy': 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
      'first-aid': 'https://images.unsplash.com/photo-1603398938093-6b77de70db2c?w=400',
      'digestive': 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400',
    };
    
    return imageMap[category] || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400';
  }

  /**
   * Get platform status summary
   */
  getPlatformStatus(): { [platform: string]: { enabled: boolean; configured: boolean } } {
    const status: { [platform: string]: { enabled: boolean; configured: boolean } } = {};
    
    this.platforms.forEach((config, platform) => {
      status[platform] = {
        enabled: config.enabled,
        configured: !!(config.apiKey && config.sellerId)
      };
    });

    return status;
  }
}

export const multiPlatformService = new MultiPlatformService();