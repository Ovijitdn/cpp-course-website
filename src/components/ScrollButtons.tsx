import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const ScrollButtons = () => {
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowUp(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (dir: "up" | "down") => {
    window.scrollTo({
      top: dir === "up" ? 0 : document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {showUp && (
        <button
          onClick={() => scrollTo("up")}
          className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-all animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
      <button
        onClick={() => scrollTo("down")}
        className="p-3 rounded-full bg-accent text-accent-foreground shadow-lg hover:opacity-90 transition-all"
        aria-label="Scroll to bottom"
      >
        <ArrowDown size={18} />
      </button>
    </div>
  );
};

export default ScrollButtons;
