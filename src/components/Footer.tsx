import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const footerLinks = {
  shop: [
    { name: "All Bracelets", href: "/shop" },
    { name: "Beaded", href: "/beaded" },
    { name: "Charm", href: "/charm" },
    { name: "Chain", href: "/chain" },
    { name: "Personalized", href: "/personalized" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  policies: [
    { name: "Shipping & Returns", href: "/shipping-returns" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to Doshi Shop 3!", {
        description: "Check your email for your 10% off code.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="section-beige py-16">
        <div className="container-narrow text-center">
          <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-3">
            Join Doshi Shop 3
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get 10% off your first order and be the first to know about new arrivals.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background border-border"
              required
            />
            <Button type="submit" className="btn-gold">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 lg:py-16">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="font-serif text-xl font-semibold mb-4 block">
                Doshi Shop 3
              </Link>
              <p className="text-background/70 text-sm mb-6">
                Everyday bracelets with a luxury finish.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-background/70 hover:text-primary text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-background/70 hover:text-primary text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policy Links */}
            <div>
              <h4 className="font-semibold mb-4">Policies</h4>
              <ul className="space-y-3">
                {footerLinks.policies.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-background/70 hover:text-primary text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/50 text-sm">
            <p>© {new Date().getFullYear()} Doshi Shop 3. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
