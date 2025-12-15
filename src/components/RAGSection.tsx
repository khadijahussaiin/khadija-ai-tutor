import { Database, Search, Sparkles, BookOpen } from "lucide-react";

const RAGSection = () => {
  return (
    <section id="what-is-rag" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Avanceret teknologi
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Hvad er RAG?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Retrieval-Augmented Generation (RAG) er en revolutionerende teknologi, 
              der kombinerer AI's generative evner med specifik, opdateret viden.
            </p>
          </div>

          {/* Visual explanation */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-soft h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Search className="w-7 h-7 text-primary" />
                </div>
                <div className="text-sm font-bold text-primary mb-2">Trin 1</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Retrieval</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Når du stiller et spørgsmål, søger systemet i en stor vidensbase 
                  for at finde de mest relevante informationer og kilder.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-soft h-full">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <Database className="w-7 h-7 text-accent" />
                </div>
                <div className="text-sm font-bold text-accent mb-2">Trin 2</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Augmentation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  De fundne informationer kombineres med dit spørgsmål for at 
                  give AI-modellen kontekst og specifik viden at arbejde med.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
            </div>

            {/* Step 3 */}
            <div>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-soft h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <div className="text-sm font-bold text-primary mb-2">Trin 3</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Generation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI'en genererer et præcist og velformuleret svar baseret på 
                  den specifikke viden – ikke bare generelle antagelser.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Hvordan RAG hjælper dig som studerende</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Præcise svar fra dit pensum</h4>
                  <p className="text-sm text-muted-foreground">Få svar baseret på dine specifikke kursusmaterialer og noter.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Opdateret information</h4>
                  <p className="text-sm text-muted-foreground">RAG sikrer, at svarene er baseret på den nyeste viden.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Kildehenvisninger</h4>
                  <p className="text-sm text-muted-foreground">Se præcis hvor informationen kommer fra, så du kan verificere.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Kontekstuelt læringsværktøj</h4>
                  <p className="text-sm text-muted-foreground">AI'en forstår din specifikke studiesituation og tilpasser svarene.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RAGSection;
