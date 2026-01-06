import { Clock, DollarSign, TrendingUp, Shield, Users, Repeat } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Valuable Time",
    description: "Automate repetitive tasks and free up your team for high-value work.",
  },
  {
    icon: DollarSign,
    title: "Reduce Operational Costs",
    description: "Cut overhead by automating manual processes and eliminating errors.",
  },
  {
    icon: TrendingUp,
    title: "Scale Effortlessly",
    description: "Workflows that grow with your business without additional headcount.",
  },
  {
    icon: Shield,
    title: "Minimize Human Error",
    description: "Consistent, reliable execution of tasks every single time.",
  },
  {
    icon: Users,
    title: "Focus on What Matters",
    description: "Empower your workforce to concentrate on strategic, high-impact work.",
  },
  {
    icon: Repeat,
    title: "24/7 Operations",
    description: "Your workflows run around the clock, even when you're sleeping.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="min-h-screen py-24 bg-card flex items-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Companies Choose{" "}
            <span className="text-primary">Leviation.ai</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI-powered workflow automation delivers measurable results that transform
            how businesses operate. Here's what you can expect:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
