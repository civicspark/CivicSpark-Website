const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
          <img src="/icon.png" alt="CivicSpark logo" className="h-10 w-10 rounded-xl" />

            <span className="text-xl font-bold text-card-foreground">CivicSpark</span>
          </div>
          <p className="mb-6 text-muted-foreground">
            Made by Santiago Silva and Sharvin Goyal under NEOLabs Software 
          </p>
          <a 
            href="mailto:civicsparkapp2025@gmail.com" 
            className="inline-flex items-center gap-2 rounded-md bg-gradient-hero px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-gradient-hero/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
