const Footer = () => (
  <footer className="border-t bg-card py-8 px-6">
    <div className="max-w-4xl mx-auto text-center space-y-3">
      <p className="font-display font-bold text-lg text-foreground">
        C++ Complete Course — Visual Reference Guide
      </p>
      <p className="text-muted-foreground text-sm">
        Prepared by
      </p>
      <p className="font-display font-semibold text-accent text-base">
        Ovijit Debnath
      </p>
      <p className="text-muted-foreground text-sm">
        CSE Undergraduate Student · RUET
      </p>
      <div className="pt-3 border-t border-border mt-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
