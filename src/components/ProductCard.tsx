import { Link } from "react-router-dom";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, isLoading } = useCartStore();
  const { node } = product;
  
  const image = node.images.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;
  const firstVariant = node.variants.edges[0]?.node;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!firstVariant) return;

    await addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || [],
    });

    toast.success("Added to cart", {
      description: node.title,
    });
  };

  return (
    <Link to={`/product/${node.handle}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary mb-4">
        {image ? (
          <img
            src={image.url}
            alt={image.altText || node.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No image
          </div>
        )}
        
        {/* Quick Add Button - visible on mobile, hover on desktop */}
        <div className="absolute bottom-3 left-3 right-3 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-200">
          <Button
            onClick={handleAddToCart}
            disabled={isLoading || !firstVariant}
            className="w-full btn-gold shadow-lg"
            size="sm"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {node.title}
        </h3>
        <p className="text-primary font-semibold">
          {price.currencyCode} ${parseFloat(price.amount).toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
