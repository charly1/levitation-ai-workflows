import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">
              AI-Powered Workflow Automation
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transform Your Business with{" "}
            <span className="text-primary">Intelligent Workflows</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            We design and build custom AI-powered n8n workflows that automate your
            processes, reduce costs, and unlock new levels of efficiency for your team.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              See Our Solutions
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">Trusted by innovative companies</p>
            <div className="flex items-center gap-8 opacity-60">
              <div className="text-foreground font-semibold">TechCorp</div>
              <div className="text-foreground font-semibold">InnovateLab</div>
              <div className="text-foreground font-semibold">DataFlow</div>
              <div className="text-foreground font-semibold hidden sm:block">AutoScale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
