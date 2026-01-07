import { Phone, Mail, BookOpen, FileText, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const useCases = [
  {
    icon: Phone,
    title: "AI Receptionist",
    description: "Never miss a call again. Our AI answers calls 24/7, schedules appointments, and answers common questions—just like a real receptionist.",
    savings: "Save 20+ hours/week",
  },
  {
    icon: Mail,
    title: "Smart Email Management",
    description: "Automatically sort, prioritize, and route incoming emails. Important messages get flagged, spam disappears, and responses get drafted.",
    savings: "Process 500+ emails/day",
  },
  {
    icon: BookOpen,
    title: "Instant Knowledge Base",
    description: "Turn your company documents into a smart assistant. Employees get instant answers from manuals, policies, and guides without searching.",
    savings: "Reduce support tickets by 60%",
  },
  {
    icon: FileText,
    title: "Invoice & Document Processing",
    description: "Extract data from invoices, contracts, and forms automatically. No more manual data entry—just upload and let AI do the work.",
    savings: "Process documents 10x faster",
  },
  {
    icon: Users,
    title: "Lead Qualification",
    description: "Score and qualify incoming leads automatically. Your sales team only talks to prospects who are ready to buy.",
    savings: "Increase conversion by 40%",
  },
  {
    icon: Calendar,
    title: "And Much More...",
    description: "Every business is unique. We analyze your workflows and identify exactly where AI can save you time—tailored to your specific needs.",
    savings: "Custom solutions for you",
  },
];

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="services" className="min-h-screen py-24 bg-background flex items-center">
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
            Not sure how AI automation fits your business? Here are real examples of how companies 
            are saving time and money with intelligent workflows.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 border-border hover:border-primary/30 bg-card ${
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
                  <useCase.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="text-muted-foreground text-base">
                  {useCase.description}
                </CardDescription>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {useCase.savings}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
