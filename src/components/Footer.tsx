const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero">
              <span className="text-xl font-bold text-white">CS</span>
            </div>
            <span className="text-xl font-bold text-card-foreground">CivicSpark</span>
          </div>
          <p className="mb-6 text-muted-foreground">
            Made with ❤️ for civic engagement
          </p>
          <div className="text-sm text-muted-foreground">
            © 2025 CivicSpark. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
