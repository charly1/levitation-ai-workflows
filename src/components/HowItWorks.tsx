import { Search, PenTool, Rocket, HeadphonesIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding your business processes, pain points, and goals. Our team analyzes where AI automation can have the biggest impact.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    description:
      "We architect custom n8n workflows tailored to your specific needs, integrating AI models and connecting all your tools seamlessly.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deploy",
    description:
      "We implement, test, and deploy your automated workflows with minimal disruption to your existing operations.",
  },
  {
    icon: HeadphonesIcon,
    step: "04",
    title: "Support",
    description:
      "Ongoing maintenance, optimization, and support ensure your workflows continue to deliver maximum value.",
  },
];

const HowItWorks = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: false });
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.05, triggerOnce: false });

  return (
    <section id="how-it-works" className="min-h-screen py-24 bg-background flex items-center">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven process ensures successful automation implementation every time.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative">
          {/* Connection Line */}
          <div
            className={`hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2 transition-all duration-1000 ${
              stepsVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg group ${
                  stepsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: stepsVisible ? `${index * 150}ms` : "0ms",
                }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8 px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-md">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-7 h-7 text-accent-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
