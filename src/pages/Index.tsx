import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { ArrowRight, Gift, Sparkles, Truck, Loader2 } from "lucide-react";

const categories = [
  { name: "Beaded", href: "/beaded", description: "Natural beauty" },
  { name: "Charm", href: "/charm", description: "Personal touches" },
  { name: "Chain", href: "/chain", description: "Timeless elegance" },
  { name: "Personalized", href: "/personalized", description: "Made for you" },
];

const benefits = [
  { icon: Sparkles, title: "Premium Feel", description: "14K gold plating on every piece" },
  { icon: Gift, title: "Gift-Ready", description: "Beautiful packaging included" },
  { icon: Truck, title: "Fast Shipping", description: "Free shipping on orders $50+" },
];

export default function Index() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts(8);
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-secondary">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl lg:text-6xl font-medium text-foreground mb-6 animate-fade-in">
              Everyday bracelets with a luxury finish.
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Beaded, charm, chain, and personalized styles for women.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="btn-gold">
                <Link to="/shop">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-outline-gold">
                <Link to="/personalized">Personalized</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 lg:py-24">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl lg:text-4xl text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="group relative aspect-square rounded-lg overflow-hidden bg-secondary hover:shadow-lg transition-shadow"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container-narrow">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl">Featured Bracelets</h2>
            <Button asChild variant="link" className="text-primary">
              <Link to="/shop">
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {loading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : products.length === 0 ? (
            <p className="text-center text-muted-foreground py-16">
              No products found. Check back soon!
            </p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {products.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
