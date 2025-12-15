import { BookOpen, GraduationCap, Lightbulb, Target, Clock, Users } from "lucide-react";

const helpItems = [
  {
    icon: Lightbulb,
    title: "Forstå komplekse emner",
    description: "Få forklaringer på svære koncepter, brudt ned i letforståelige dele tilpasset dit niveau.",
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Hjælp til opgaver",
    description: "Få vejledning til strukturering, research og formulering af dine akademiske opgaver.",
    color: "accent",
  },
  {
    icon: GraduationCap,
    title: "Eksamensforberedelse",
    description: "Træn med relevante spørgsmål, få overblik over pensum og identificer fokusområder.",
    color: "primary",
  },
  {
    icon: Target,
    title: "Strukturering af viden",
    description: "Organiser din læring med mindmaps, resuméer og tematiske oversigter.",
    color: "accent",
  },
  {
    icon: Clock,
    title: "Effektiv studieteknik",
    description: "Lær optimale metoder til at huske og forstå stoffet – tilpasset din læringsstil.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Tilpasset dit niveau",
    description: "AI'en tilpasser sine forklaringer til præcis det niveau, du befinder dig på.",
    color: "accent",
  },
];

const HowAIHelpsSection = () => {
  return (
    <section id="how-ai-helps" className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Praktisk anvendelse
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Hvordan kan AI hjælpe på dit semester?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fra de første forelæsninger til den afsluttende eksamen – AI-værktøjer 
            kan støtte dig gennem hele din studierejse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {helpItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
            >
              <div 
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  item.color === "primary" 
                    ? "bg-primary/10 group-hover:bg-primary/20" 
                    : "bg-accent/10 group-hover:bg-accent/20"
                }`}
              >
                <item.icon className={`w-6 h-6 ${item.color === "primary" ? "text-primary" : "text-accent"}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowAIHelpsSection;
