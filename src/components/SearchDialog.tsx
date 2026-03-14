import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, BookOpen, ArrowRight } from "lucide-react";
import { sections } from "@/data/courseData";
import { motion, AnimatePresence } from "framer-motion";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

const SearchDialog = ({ open, onClose }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const matches: { id: string; title: string; section: string; snippet: string }[] = [];

    for (const section of sections) {
      for (const topic of section.topics) {
        const titleMatch = topic.title.toLowerCase().includes(q);
        const explMatch = topic.explanation.toLowerCase().includes(q);
        if (titleMatch || explMatch) {
          let snippet = "";
          if (explMatch && !titleMatch) {
            const idx = topic.explanation.toLowerCase().indexOf(q);
            const start = Math.max(0, idx - 40);
            const end = Math.min(topic.explanation.length, idx + q.length + 60);
            snippet = (start > 0 ? "..." : "") + topic.explanation.slice(start, end) + (end < topic.explanation.length ? "..." : "");
          } else {
            snippet = topic.explanation.slice(0, 100) + "...";
          }
          matches.push({ id: topic.id, title: topic.title, section: section.title, snippet });
        }
      }
    }
    return matches.slice(0, 8);
  }, [query]);

  const goTo = (id: string) => {
    navigate(`/lesson/${id}`);
    onClose();
    setQuery("");
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-foreground/50 backdrop-blur-sm flex items-start justify-center pt-[15vh]"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="bg-card border rounded-2xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 px-4 py-3 border-b">
            <Search size={18} className="text-muted-foreground shrink-0" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topics, concepts, keywords..."
              className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
            />
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
              <X size={16} />
            </button>
          </div>

          <div className="max-h-[50vh] overflow-y-auto">
            {query.trim() && results.length === 0 && (
              <div className="p-8 text-center text-muted-foreground text-sm">
                No topics found for "{query}"
              </div>
            )}
            {results.map((r) => (
              <button
                key={r.id}
                onClick={() => goTo(r.id)}
                className="w-full flex items-start gap-3 px-4 py-3 hover:bg-secondary/50 text-left transition-colors border-b border-border/50 last:border-b-0"
              >
                <BookOpen size={14} className="text-accent mt-1 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{r.title}</span>
                    <span className="text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">{r.section}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{r.snippet}</p>
                </div>
                <ArrowRight size={14} className="text-muted-foreground mt-1 shrink-0" />
              </button>
            ))}
            {!query.trim() && (
              <div className="p-6 text-center text-muted-foreground text-sm">
                <p>Type to search across all {sections.reduce((s, sec) => s + sec.topics.length, 0)}+ topics</p>
                <p className="text-xs mt-1 text-muted-foreground/60">Tip: Press Ctrl+K to open search anytime</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchDialog;
