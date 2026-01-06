import { Bot, Workflow, Zap, Brain, MessageSquare, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: Workflow,
    title: "Custom Workflow Design",
    description:
      "We analyze your business processes and design tailored n8n workflows that perfectly fit your needs.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "Seamlessly integrate ChatGPT, Claude, and other AI models into your workflows for intelligent automation.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description:
      "Automate repetitive tasks like data entry, email handling, and document processing to save hours daily.",
  },
  {
    icon: Brain,
    title: "Smart Decision Making",
    description:
      "Build workflows that use AI to analyze data and make intelligent decisions without human intervention.",
  },
  {
    icon: MessageSquare,
    title: "Communication Automation",
    description:
      "Automate customer communications, notifications, and internal messaging across all your platforms.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Create automated reporting workflows that gather, analyze, and visualize your business data.",
  },
];

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: false });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05, triggerOnce: false });

  return (
    <section id="services" className="min-h-screen py-24 bg-card flex items-center">
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
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in building intelligent automation solutions that transform how
            your business operates.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 border-border hover:border-primary/30 bg-background ${
                gridVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
