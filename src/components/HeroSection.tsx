import { Brain, Sparkles, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContent = () => {
    document.getElementById("what-is-ai")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              Din personlige AI-studievejleder
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Intelligent læring med</span>
            <br />
            <span className="text-gradient">Khadija Private AI Tutor</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Oplev hvordan kunstig intelligens og RAG-teknologi kan transformere din studieproces. 
            Få personlig hjælp til komplekse emner, opgaver og eksamensforberedelse.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              <Brain className="w-5 h-5" />
              Stil et spørgsmål
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContent}>
              Lær mere om AI
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <button 
              onClick={scrollToContent}
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll ned"
            >
              <span className="text-sm font-medium">Udforsk mere</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
