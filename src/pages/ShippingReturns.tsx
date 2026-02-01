import { Layout } from "@/components/Layout";

export default function ShippingReturns() {
  return (
    <Layout>
      <div className="container-narrow py-12 lg:py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-3xl lg:text-4xl mb-8 text-center">
            Shipping & Returns
          </h1>

          <div className="prose prose-gray max-w-none space-y-8">
            {/* Shipping */}
            <section>
              <h2 className="font-serif text-xl lg:text-2xl mb-4">Shipping</h2>
              
              <h3 className="font-semibold text-lg mb-2">Processing Time</h3>
              <p className="text-muted-foreground mb-4">
                Orders are processed within 1-2 business days. During peak seasons 
                or promotional periods, processing may take up to 3 business days.
              </p>

              <h3 className="font-semibold text-lg mb-2">Shipping Times</h3>
              <ul className="text-muted-foreground space-y-2 mb-4">
                <li>• <strong>United States:</strong> 3-7 business days</li>
                <li>• <strong>Canada:</strong> 7-14 business days</li>
                <li>• <strong>International:</strong> 10-21 business days</li>
              </ul>

              <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
              <p className="text-muted-foreground mb-4">
                We offer free standard shipping on all orders over $50 within the 
                United States. International shipping rates are calculated at checkout.
              </p>

              <h3 className="font-semibold text-lg mb-2">Order Tracking</h3>
              <p className="text-muted-foreground">
                Once your order ships, you'll receive a confirmation email with 
                tracking information. You can track your package directly through 
                the carrier's website.
              </p>
            </section>

            {/* Returns */}
            <section>
              <h2 className="font-serif text-xl lg:text-2xl mb-4">Returns</h2>
              
              <h3 className="font-semibold text-lg mb-2">Return Window</h3>
              <p className="text-muted-foreground mb-4">
                We accept returns within 30 days of delivery for unworn items in 
                original packaging. Items must be in new condition with all tags 
                attached.
              </p>

              <h3 className="font-semibold text-lg mb-2">How to Start a Return</h3>
              <ol className="text-muted-foreground space-y-2 mb-4 list-decimal list-inside">
                <li>Contact us at support@doshishop3.com with your order number</li>
                <li>We'll send you a prepaid return label (US orders)</li>
                <li>Pack items securely in original packaging</li>
                <li>Drop off at any carrier location</li>
              </ol>

              <h3 className="font-semibold text-lg mb-2">Refund Processing</h3>
              <p className="text-muted-foreground mb-4">
                Once we receive your return, we'll inspect the items and process 
                your refund within 5-7 business days. Refunds will be issued to 
                your original payment method.
              </p>

              <h3 className="font-semibold text-lg mb-2">Non-Returnable Items</h3>
              <p className="text-muted-foreground">
                Personalized or custom-engraved items cannot be returned unless 
                they arrive damaged or defective. Sale items are final sale.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-secondary rounded-lg p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Need Help?</h3>
              <p className="text-muted-foreground mb-2">
                If you have any questions about shipping or returns, we're here to help.
              </p>
              <a href="mailto:support@doshishop3.com" className="text-primary hover:underline">
                support@doshishop3.com
              </a>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
