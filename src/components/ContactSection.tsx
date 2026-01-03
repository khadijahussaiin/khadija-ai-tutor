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

const WEBHOOK_URL = "http://localhost:5678/webhook/3b93eb08-8e54-4ccf-9dd8-4529aed834f0";
//connected to webhook i n8n
const semesters = [
  { value: "1", label: "1. semester" },
  { value: "2", label: "2. semester" },
  { value: "3", label: "3. semester" },
  { value: "4", label: "4. semester" },
  { value: "5", label: "5. semester" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    semester: "",
    question: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          semester: formData.semester,
          question: formData.question,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Webhook fejlede");
      }

      toast({
        title: "Tak for din besked!",
        description: "Din besked er sendt korrekt.",
      });

      setFormData({
        name: "",
        email: "",
        semester: "",
        question: "",
      });
    } catch (error) {
      toast({
        title: "Noget gik galt",
        description: "Kunne ikke sende beskeden. Prøv igen.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
      <section id="contact" className="py-24 md:py-32 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
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

            <form
                onSubmit={handleSubmit}
                className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-card"
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" /> Navn
                  </Label>
                  <Input
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" /> Email
                  </Label>
                  <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-muted-foreground" /> Semester
                  </Label>
                  <Select
                      value={formData.semester}
                      onValueChange={(v) => handleChange("semester", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Vælg dit semester" />
                    </SelectTrigger>
                    <SelectContent>
                      {semesters.map((s) => (
                          <SelectItem key={s.value} value={s.value}>
                            {s.label}
                          </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-muted-foreground" /> Spørgsmål
                  </Label>
                  <Textarea
                      rows={5}
                      value={formData.question}
                      onChange={(e) => handleChange("question", e.target.value)}
                      required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  <Send className="w-5 h-5" />
                  {isLoading ? "Sender..." : "Send spørgsmål"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
  );
};

export default ContactSection;
