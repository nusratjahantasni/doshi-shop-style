import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { Loader2 } from "lucide-react";

interface CollectionPageProps {
  title: string;
  description: string;
  filterQuery?: string;
}

export function CollectionPage({ title, description, filterQuery }: CollectionPageProps) {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        // Fetch all products and filter client-side for demo
        // In production, you'd use Shopify collections
        const data = await fetchProducts(50, filterQuery);
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, [filterQuery]);

  return (
    <Layout>
      <div className="container-narrow py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl lg:text-4xl mb-3">{title}</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">{description}</p>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : products.length === 0 ? (
          <p className="text-center text-muted-foreground py-16">
            No products in this collection yet. Check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

// Individual collection pages
export function BeadedPage() {
  return (
    <CollectionPage
      title="Beaded Bracelets"
      description="Natural stones and handcrafted beads create unique, organic pieces that bring texture and color to your wrist."
    />
  );
}

export function CharmPage() {
  return (
    <CollectionPage
      title="Charm Bracelets"
      description="Add personal meaning with our collection of charming bracelets. Each charm tells a story."
    />
  );
}

export function ChainPage() {
  return (
    <CollectionPage
      title="Chain Bracelets"
      description="Timeless chain styles in 14K gold plating. From delicate links to bold statement pieces."
    />
  );
}

export function PersonalizedPage() {
  return (
    <CollectionPage
      title="Personalized Bracelets"
      description="Make it yours. Custom engravings and birthstone options to create something truly special."
    />
  );
}
