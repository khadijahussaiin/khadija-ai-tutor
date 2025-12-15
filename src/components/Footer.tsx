import { Brain, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Brain className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">Khadija Private AI Tutor</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Lavet med <Heart className="w-4 h-4 text-primary" /> til studerende
          </p>

          {/* Year */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alle rettigheder forbeholdes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
