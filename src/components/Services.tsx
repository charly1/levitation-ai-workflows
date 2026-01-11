import { Phone, Mail, BookOpen, FileText, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/i18n/LanguageContext";

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });
  const { t } = useLanguage();

  const useCases = [
    {
      icon: Phone,
      title: t.services.virtualReceptionist.title,
      description: t.services.virtualReceptionist.description,
    },
    {
      icon: Mail,
      title: t.services.emailManagement.title,
      description: t.services.emailManagement.description,
    },
    {
      icon: BookOpen,
      title: t.services.documentKnowledge.title,
      description: t.services.documentKnowledge.description,
    },
    {
      icon: Users,
      title: t.services.leadQualification.title,
      description: t.services.leadQualification.description,
    },
    {
      icon: FileText,
      title: t.services.onboarding.title,
      description: t.services.onboarding.description,
    },
    {
      icon: Calendar,
      title: t.services.more.title,
      description: t.services.more.description,
    },
  ];

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
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
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
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {useCase.description}
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
