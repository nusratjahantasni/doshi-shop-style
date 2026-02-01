import { Layout } from "@/components/Layout";
import { Sparkles, Gift, Heart } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="container-narrow py-12 lg:py-20">
        {/* Hero */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-serif text-3xl lg:text-5xl mb-4">About Doshi Shop 3</h1>
          <p className="text-lg text-muted-foreground">
            We believe that everyday jewelry should feel special. That's why we create 
            beautiful bracelets that combine premium materials with thoughtful design.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          <div className="text-center p-6 bg-secondary rounded-lg">
            <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl mb-2">Our Style</h3>
            <p className="text-muted-foreground text-sm">
              Minimal, modern, and effortlessly elegant. Our designs complement any 
              outfit and transition seamlessly from day to night.
            </p>
          </div>
          
          <div className="text-center p-6 bg-secondary rounded-lg">
            <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl mb-2">Quality & Materials</h3>
            <p className="text-muted-foreground text-sm">
              Every piece features 14K gold plating over stainless steel, ensuring 
              durability and a lasting shine. Hypoallergenic and water-resistant.
            </p>
          </div>
          
          <div className="text-center p-6 bg-secondary rounded-lg">
            <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mx-auto mb-4">
              <Gift className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl mb-2">Packaging</h3>
            <p className="text-muted-foreground text-sm">
              Every order arrives in a beautiful gift box, making it perfect for 
              gifting or treating yourself. No extra wrapping needed.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl lg:text-3xl mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Doshi Shop 3 was born from a simple idea: luxury should be accessible. 
            We noticed a gap in the market—beautiful, high-quality bracelets that 
            don't require a designer price tag.
          </p>
          <p className="text-muted-foreground">
            Today, we ship our handcrafted pieces worldwide, bringing a touch of 
            everyday luxury to women everywhere. Each bracelet is designed in-house 
            and crafted with the same attention to detail you'd find in high-end 
            jewelry stores.
          </p>
        </div>
      </div>
    </Layout>
  );
}
