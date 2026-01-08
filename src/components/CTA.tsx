import { Button } from "@/components/ui/button";
import { Calendar, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CTA = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="contact" className="min-h-screen py-24 bg-background flex items-center">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/90 to-primary p-12 md:p-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />

          {/* Content */}
          <div
            className={`relative z-10 max-w-3xl mx-auto text-center transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
              Book a free consultation and discover how AI-powered workflows can transform
              your operations. No commitment, just insights.
            </p>

            {/* Contact Form */}
            <form
              action="https://formspree.io/f/xvzgennl"
              method="POST"
              className="max-w-md mx-auto space-y-4 text-left"
            >
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-background/95 border-0 text-foreground placeholder:text-muted-foreground"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-background/95 border-0 text-foreground placeholder:text-muted-foreground"
              />
              <Textarea
                name="message"
                placeholder="Tell us about your automation needs..."
                rows={4}
                required
                className="bg-background/95 border-0 text-foreground placeholder:text-muted-foreground resize-none"
              />
              <Button
                type="submit"
                size="xl"
                className="w-full bg-background text-foreground hover:bg-background/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Schedule Free Consultation
              </Button>
            </form>

            <p className="mt-8 text-sm text-primary-foreground/70">
              ✓ No credit card required &nbsp;&nbsp; ✓ 30-minute call &nbsp;&nbsp; ✓ Custom roadmap included
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
