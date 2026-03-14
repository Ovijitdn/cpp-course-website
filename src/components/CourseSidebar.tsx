import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, X, Code2, Home, FolderGit2, GraduationCap, CheckCircle2 } from "lucide-react";
import { sections } from "@/data/courseData";
import { useProgress } from "@/hooks/useProgress";

interface CourseSidebarProps {
  onClose: () => void;
}

const CourseSidebar = ({ onClose }: CourseSidebarProps) => {
  const location = useLocation();
  const { completedTopics } = useProgress();
  const [expanded, setExpanded] = useState<string[]>(() => {
    const currentTopicId = location.pathname.split("/lesson/")[1];
    if (currentTopicId) {
      const section = sections.find(s => s.topics.some(t => t.id === currentTopicId));
      return section ? [section.id] : [];
    }
    return [];
  });

  const toggleSection = (id: string) => {
    setExpanded(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const totalTopics = sections.reduce((sum, s) => sum + s.topics.length, 0);
  const completedCount = completedTopics.size;
  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 flex items-center justify-between border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-sidebar-primary text-lg">
          <Code2 size={24} />
          <span>C++ Course</span>
        </Link>
        <button onClick={onClose} className="lg:hidden text-sidebar-foreground hover:text-sidebar-accent-foreground transition-colors">
          <X size={20} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="px-4 py-3 border-b border-sidebar-border">
        <div className="flex items-center justify-between text-xs text-sidebar-foreground/70 mb-1.5">
          <span>Progress</span>
          <span className="font-mono">{completedCount}/{totalTopics} ({progressPercent}%)</span>
        </div>
        <div className="w-full h-2 bg-sidebar-accent rounded-full overflow-hidden">
          <div
            className="h-full bg-sidebar-primary rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        <Link
          to="/"
          onClick={onClose}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            isActive("/")
              ? "bg-sidebar-accent text-sidebar-primary"
              : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          }`}
        >
          <Home size={16} />
          Home
        </Link>

        <div className="pt-2">
          <p className="px-3 py-1 text-xs uppercase tracking-wider text-sidebar-foreground/50 font-semibold">
            Course Modules
          </p>
        </div>

        {sections.map((section) => {
          const sectionCompleted = section.topics.filter(t => completedTopics.has(t.id)).length;
          const allDone = sectionCompleted === section.topics.length && section.topics.length > 0;

          return (
            <div key={section.id}>
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span>{section.emoji}</span>
                  <span>{section.title}</span>
                  {allDone && <CheckCircle2 size={12} className="text-sidebar-primary" />}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-sidebar-foreground/40 font-mono">
                    {sectionCompleted}/{section.topics.length}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      expanded.includes(section.id) ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {expanded.includes(section.id) && (
                <div className="ml-4 pl-3 border-l border-sidebar-border space-y-0.5 mt-1 mb-2">
                  {section.topics.map((topic) => (
                    <Link
                      key={topic.id}
                      to={`/lesson/${topic.id}`}
                      onClick={onClose}
                      className={`sidebar-link flex items-center justify-between ${
                        isActive(`/lesson/${topic.id}`) ? "sidebar-link-active" : ""
                      }`}
                    >
                      <span className="truncate">{topic.title}</span>
                      {completedTopics.has(topic.id) && (
                        <CheckCircle2 size={12} className="text-sidebar-primary shrink-0" />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <div className="pt-2">
          <p className="px-3 py-1 text-xs uppercase tracking-wider text-sidebar-foreground/50 font-semibold">
            Practice
          </p>
        </div>

        <Link
          to="/projects"
          onClick={onClose}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            isActive("/projects")
              ? "bg-sidebar-accent text-sidebar-primary"
              : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          }`}
        >
          <FolderGit2 size={16} />
          Projects
        </Link>

        <Link
          to="/interview"
          onClick={onClose}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            isActive("/interview")
              ? "bg-sidebar-accent text-sidebar-primary"
              : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          }`}
        >
          <GraduationCap size={16} />
          Interview Prep
        </Link>
      </nav>

      <div className="p-4 border-t border-sidebar-border space-y-1">
        <p className="text-xs text-sidebar-foreground/70 text-center font-medium">
          Prepared by Ovijit Debnath
        </p>
        <p className="text-xs text-sidebar-foreground/50 text-center">
          CSE, RUET · {totalTopics}+ Topics
        </p>
      </div>
    </div>
  );
};

export default CourseSidebar;
