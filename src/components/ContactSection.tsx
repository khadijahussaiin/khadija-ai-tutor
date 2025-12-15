import { useState } from "react";
import { Send, User, Mail, MessageSquare, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const semesters = [
  { value: "1", label: "1. semester" },
  { value: "2", label: "2. semester" },
  { value: "3", label: "3. semester" },
  { value: "4", label: "4. semester" },
  { value: "5", label: "5. semester" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    semester: "",
    question: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success toast
    toast({
      title: "Tak for din besked!",
      description: "Vi vender tilbage til dig hurtigst muligt.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      semester: "",
      question: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Har du et spørgsmål?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Udfyld formularen nedenfor, så hjælper vi dig med at komme i gang 
              med AI-assisteret læring.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-card">
            <div className="space-y-6">
              {/* Name field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  Navn
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Dit fulde navn"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="h-12 bg-background border-border focus:border-primary focus:ring-primary/20"
                />
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="din@email.dk"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="h-12 bg-background border-border focus:border-primary focus:ring-primary/20"
                />
              </div>

              {/* Semester dropdown */}
              <div className="space-y-2">
                <Label htmlFor="semester" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-muted-foreground" />
                  Vælg semester
                </Label>
                <Select value={formData.semester} onValueChange={(value) => handleChange("semester", value)}>
                  <SelectTrigger className="h-12 bg-background border-border focus:border-primary focus:ring-primary/20">
                    <SelectValue placeholder="Vælg dit semester" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {semesters.map((sem) => (
                      <SelectItem key={sem.value} value={sem.value} className="focus:bg-secondary">
                        {sem.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Question textarea */}
              <div className="space-y-2">
                <Label htmlFor="question" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                  Dit spørgsmål
                </Label>
                <Textarea
                  id="question"
                  placeholder="Beskriv hvad du gerne vil have hjælp til..."
                  value={formData.question}
                  onChange={(e) => handleChange("question", e.target.value)}
                  required
                  rows={5}
                  className="bg-background border-border focus:border-primary focus:ring-primary/20 resize-none"
                />
              </div>

              {/* Submit button */}
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Send spørgsmål
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
