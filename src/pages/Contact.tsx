import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent!", {
      description: "We'll get back to you within 24-48 hours.",
    });

    setFormData({ name: "", email: "", message: "" });
    setLoading(false);
  };

  return (
    <Layout>
      <div className="container-narrow py-12 lg:py-20">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl lg:text-4xl mb-3">Contact Us</h1>
            <p className="text-muted-foreground">
              Have a question or need help? We'd love to hear from you.
            </p>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 lg:p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="How can we help you?"
                  required
                  rows={5}
                  className="mt-1.5"
                />
              </div>

              <Button
                type="submit"
                className="w-full btn-gold"
                size="lg"
                disabled={loading}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>support@doshishop3.com</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              We typically respond within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
