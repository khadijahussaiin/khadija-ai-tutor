import { Cpu, MessageSquare, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Maskinlæring",
    description: "AI lærer fra data og forbedrer sig kontinuerligt uden at blive eksplicit programmeret.",
  },
  {
    icon: MessageSquare,
    title: "Naturlig sprogforståelse",
    description: "Moderne AI kan forstå, analysere og generere menneskeligt sprog på et avanceret niveau.",
  },
  {
    icon: TrendingUp,
    title: "Mønstergenkendelse",
    description: "AI identificerer komplekse mønstre i store datamængder og skaber værdifulde indsigter.",
  },
  {
    icon: Zap,
    title: "Automatisering",
    description: "Gentagne opgaver kan automatiseres, så du kan fokusere på det vigtige: at lære.",
  },
];

const WhatIsAISection = () => {
  return (
    <section id="what-is-ai" className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Forstå teknologien
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Hvad er kunstig intelligens?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kunstig intelligens (AI) er computersystemer, der kan udføre opgaver, 
            som normalt kræver menneskelig intelligens. Fra at forstå sprog til at 
            analysere kompleks information – AI er værktøjet, der gør læring smartere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsAISection;
