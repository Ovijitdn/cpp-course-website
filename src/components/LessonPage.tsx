import { useState } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, HelpCircle, ChevronLeft, ChevronRight, BookOpen, CheckCircle2, Bookmark, BookmarkCheck, StickyNote, Save } from "lucide-react";
import { Topic } from "@/data/types";
import CodeBlock from "./CodeBlock";
import { useProgress } from "@/hooks/useProgress";
import { motion } from "framer-motion";

interface LessonPageProps {
  topic: Topic;
  prevTopic: Topic | null;
  nextTopic: Topic | null;
}

const LessonPage = ({ topic, prevTopic, nextTopic }: LessonPageProps) => {
  const { completedTopics, bookmarkedTopics, notes, toggleComplete, toggleBookmark, saveNote } = useProgress();
  const isCompleted = completedTopics.has(topic.id);
  const isBookmarked = bookmarkedTopics.has(topic.id);
  const [noteText, setNoteText] = useState(notes[topic.id] || "");
  const [showNotes, setShowNotes] = useState(false);
  const [noteSaved, setNoteSaved] = useState(false);

  // Update note text when topic changes
  const currentNote = notes[topic.id] || "";
  if (noteText !== currentNote && !showNotes) {
    // Only sync when notes panel is closed
  }

  const handleSaveNote = async () => {
    await saveNote(topic.id, noteText);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2000);
  };

  return (
    <motion.article
      key={topic.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header with actions */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen size={14} />
            <span>Lesson</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setNoteText(notes[topic.id] || ""); setShowNotes(!showNotes); }}
              className={`p-2 rounded-lg transition-colors ${showNotes ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent/20"}`}
              title="Notes"
            >
              <StickyNote size={16} />
            </button>
            <button
              onClick={() => toggleBookmark(topic.id)}
              className={`p-2 rounded-lg transition-colors ${isBookmarked ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent/20"}`}
              title={isBookmarked ? "Remove bookmark" : "Bookmark"}
            >
              {isBookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
            </button>
            <button
              onClick={() => toggleComplete(topic.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isCompleted
                  ? "bg-success text-success-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-success/20"
              }`}
            >
              <CheckCircle2 size={16} />
              {isCompleted ? "Completed" : "Mark Complete"}
            </button>
          </div>
        </div>
        <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
          {topic.title}
        </h1>
      </div>

      {/* Notes Panel */}
      {showNotes && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-8 p-4 rounded-xl border-2 border-accent/30 bg-accent-soft"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-display font-semibold text-foreground flex items-center gap-2">
              <StickyNote size={14} />
              Your Notes
            </h3>
            <button
              onClick={handleSaveNote}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
            >
              <Save size={12} />
              {noteSaved ? "Saved!" : "Save"}
            </button>
          </div>
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Write your notes here..."
            className="w-full min-h-[100px] p-3 rounded-lg border bg-background text-foreground text-sm resize-y focus:ring-2 focus:ring-accent focus:outline-none"
          />
        </motion.div>
      )}

      {/* Explanation */}
      <section className="mb-8">
        {topic.explanation.split("\n\n").map((para, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-base">
            {para}
          </p>
        ))}
      </section>

      {/* Syntax */}
      {topic.syntax && (
        <section className="mb-8">
          <h2 className="text-xl font-display font-semibold text-foreground mb-3">
            📝 Syntax
          </h2>
          <CodeBlock code={topic.syntax} />
        </section>
      )}

      {/* Example */}
      <section className="mb-8">
        <h2 className="text-xl font-display font-semibold text-foreground mb-3">
          💻 Example
        </h2>
        <CodeBlock code={topic.example} />
        <div className="mt-3 p-4 bg-secondary rounded-lg border">
          <p className="text-sm text-secondary-foreground leading-relaxed">
            <strong>Explanation:</strong> {topic.codeExplanation}
          </p>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-8">
        <h2 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2">
          <AlertTriangle size={20} className="text-accent" />
          Common Mistakes
        </h2>
        <ul className="space-y-2">
          {topic.commonMistakes.map((mistake, i) => (
            <li
              key={i}
              className="p-3 bg-accent-soft rounded-lg text-sm text-accent-foreground border border-accent/20"
            >
              <span className="font-medium">⚠️</span> {mistake}
            </li>
          ))}
        </ul>
      </section>

      {/* Practice Questions */}
      <section className="mb-10">
        <h2 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2">
          <HelpCircle size={20} className="text-primary" />
          Practice Questions
        </h2>
        <ol className="space-y-2">
          {topic.practiceQuestions.map((q, i) => (
            <li key={i} className="flex gap-3 p-3 bg-secondary rounded-lg text-sm text-secondary-foreground">
              <span className="font-bold text-accent shrink-0">{i + 1}.</span>
              {q}
            </li>
          ))}
        </ol>
      </section>

      {/* Navigation */}
      <nav className="flex items-center justify-between pt-6 border-t">
        {prevTopic ? (
          <Link
            to={`/lesson/${prevTopic.id}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
          >
            <ChevronLeft size={16} />
            <span className="max-w-[150px] truncate">{prevTopic.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextTopic ? (
          <Link
            to={`/lesson/${nextTopic.id}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
          >
            <span className="max-w-[150px] truncate">{nextTopic.title}</span>
            <ChevronRight size={16} />
          </Link>
        ) : (
          <Link
            to="/projects"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
          >
            Projects
            <ChevronRight size={16} />
          </Link>
        )}
      </nav>
    </motion.article>
  );
};

export default LessonPage;
