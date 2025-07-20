import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import {
  ShoppingCart,
  Truck,
  Package,
  Store,
  CheckCircle,
  XCircle,
  Loader2,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';

interface PlatformStatus {
  [platform: string]: {
    enabled: boolean;
    configured: boolean;
  };
}

interface Platform {
  name: string;
  icon: React.ReactNode;
  description: string;
  category: 'marketplace' | 'delivery' | 'retail';
  color: string;
}

const platformInfo: Record<string, Platform> = {
  amazon: {
    name: 'Amazon',
    icon: <Package className="h-5 w-5" />,
    description: 'Global marketplace with millions of customers',
    category: 'marketplace',
    color: 'bg-orange-500',
  },
  uber: {
    name: 'Uber Direct',
    icon: <Truck className="h-5 w-5" />,
    description: 'On-demand local delivery service',
    category: 'delivery',
    color: 'bg-black',
  },
  instacart: {
    name: 'Instacart',
    icon: <ShoppingCart className="h-5 w-5" />,
    description: 'Same-day grocery and pharmacy delivery',
    category: 'delivery',
    color: 'bg-green-500',
  },
  doordash: {
    name: 'DoorDash',
    icon: <Store className="h-5 w-5" />,
    description: 'Food and retail delivery platform',
    category: 'delivery',
    color: 'bg-red-500',
  },
  postmates: {
    name: 'Postmates',
    icon: <Truck className="h-5 w-5" />,
    description: 'Local delivery network',
    category: 'delivery',
    color: 'bg-yellow-500',
  },
};

interface MultiPlatformManagerProps {
  productId?: string;
  storeLocation?: string;
}

export default function MultiPlatformManager({
  productId,
  storeLocation,
}: MultiPlatformManagerProps) {
  const { toast } = useToast();
  const [syncingPlatforms, setSyncingPlatforms] = useState<string[]>([]);

  // Fetch platform status
  const { data: platformData, isLoading: statusLoading } = useQuery({
    queryKey: ['/api/platforms/status'],
    queryFn: () => apiRequest('GET', '/api/platforms/status'),
  });

  // Sync product to platforms mutation
  const syncProductMutation = useMutation({
    mutationFn: async (data: { productId: string; storeLocation: string }) => {
      return apiRequest('POST', '/api/otc-products/sync-platforms', data);
    },
    onSuccess: (data) => {
      toast({
        title: 'Platform Sync Complete',
        description: `Product synced to ${data.platformResults ? Object.keys(data.platformResults).length : 0} platforms`,
      });
      queryClient.invalidateQueries({ queryKey: ['/api/platforms/status'] });
    },
    onError: (error: any) => {
      toast({
        title: 'Sync Failed',
        description: error.message || 'Failed to sync product to platforms',
        variant: 'destructive',
      });
    },
  });

  const handleSyncProduct = () => {
    if (!productId || !storeLocation) {
      toast({
        title: 'Missing Information',
        description: 'Product ID and store location are required for syncing',
        variant: 'destructive',
      });
      return;
    }

    syncProductMutation.mutate({ productId, storeLocation });
  };

  const platformStatus: PlatformStatus = platformData?.platforms || {};
  const enabledPlatforms = platformData?.enabledPlatforms || [];
  const hasConfigured = platformData?.hasConfigured || false;

  if (statusLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            Loading Platform Status...
          </CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5" />
            Multi-Platform Sales Dashboard
          </CardTitle>
          <CardDescription>
            Sell your OTC products across multiple online platforms and delivery services
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!hasConfigured && (
            <Alert className="mb-6">
              <AlertDescription>
                No platforms are configured yet. Set up your API credentials to start selling across
                multiple channels.
              </AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(platformInfo).map(([key, platform]) => {
              const status = platformStatus[key];
              const isEnabled = status?.enabled || false;
              const isConfigured = status?.configured || false;

              return (
                <Card key={key} className="relative">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-lg ${platform.color} text-white`}>
                          {platform.icon}
                        </div>
                        <div>
                          <CardTitle className="text-sm">{platform.name}</CardTitle>
                          <p className="text-xs text-muted-foreground capitalize">
                            {platform.category}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Badge variant={isConfigured ? 'default' : 'secondary'} className="text-xs">
                          {isConfigured ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <XCircle className="h-3 w-3 mr-1" />
                          )}
                          {isConfigured ? 'Ready' : 'Setup Required'}
                        </Badge>
                        {isEnabled && (
                          <Badge variant="outline" className="text-xs">
                            Active
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{platform.description}</p>
                    {isConfigured ? (
                      <div className="space-y-2">
                        <div className="text-xs text-green-600">✓ API credentials configured</div>
                        {isEnabled && (
                          <div className="text-xs text-blue-600">✓ Products can be synced</div>
                        )}
                      </div>
                    ) : (
                      <div className="text-xs text-amber-600">
                        Configure API credentials to enable
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {hasConfigured && productId && storeLocation && (
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Product Sync Actions</h4>
              <div className="flex items-center gap-4">
                <Button
                  onClick={handleSyncProduct}
                  disabled={syncProductMutation.isPending}
                  className="flex items-center gap-2"
                >
                  {syncProductMutation.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <RefreshCw className="h-4 w-4" />
                  )}
                  Sync to All Platforms
                </Button>
                <div className="text-sm text-muted-foreground">
                  Sync this product to {enabledPlatforms.length} enabled platform
                  {enabledPlatforms.length !== 1 ? 's' : ''}
                </div>
              </div>
            </div>
          )}

          {enabledPlatforms.length > 0 && (
            <div className="mt-6">
              <h4 className="font-medium mb-3">Active Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {enabledPlatforms.map((platformName) => (
                  <Badge key={platformName} variant="outline" className="flex items-center gap-1">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    {platformName}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Benefits of Multi-Platform Selling</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h5 className="font-medium">Expanded Reach</h5>
              <p className="text-sm text-muted-foreground">
                Access millions of customers across different platforms and demographics
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="font-medium">Automated Inventory</h5>
              <p className="text-sm text-muted-foreground">
                Sync inventory levels automatically across all platforms
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="font-medium">Unified Management</h5>
              <p className="text-sm text-muted-foreground">
                Manage all your sales channels from one central dashboard
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="font-medium">Flexible Delivery</h5>
              <p className="text-sm text-muted-foreground">
                Offer pickup, delivery, and shipping options to meet customer needs
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
