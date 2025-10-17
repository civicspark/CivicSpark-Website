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

        </div>
      </div>
    </footer>
  );
};

export default Footer;
