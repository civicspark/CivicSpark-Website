import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero">
            <span className="text-xl font-bold text-white">CS</span>
          </div>
          <span className="text-xl font-bold text-foreground">CivicSpark</span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#home" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Home
          </a>
          <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Features
          </a>
          <a href="#screenshots" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Screenshots
          </a>
          <a href="#download" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Download
          </a>
        </nav>

        <Button size="sm" className="bg-gradient-hero md:hidden" asChild>
          <a href="#download">Download</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
