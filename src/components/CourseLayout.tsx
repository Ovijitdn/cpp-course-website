import { useState, useEffect } from "react";
import { Menu, LogOut, User, Search } from "lucide-react";
import CourseSidebar from "./CourseSidebar";
import ThemeToggle from "./ThemeToggle";
import Footer from "./Footer";
import ScrollButtons from "./ScrollButtons";
import SearchDialog from "./SearchDialog";
import { useAuth } from "@/hooks/useAuth";

interface CourseLayoutProps {
  children: React.ReactNode;
}

const CourseLayout = ({ children }: CourseLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { user, signOut } = useAuth();

  // Ctrl+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="flex min-h-screen">
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-[280px] bg-sidebar text-sidebar-foreground z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto flex-shrink-0`}
      >
        <CourseSidebar onClose={() => setSidebarOpen(false)} />
      </aside>

      <div className="flex-1 min-h-screen flex flex-col">
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-sm border-b px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-foreground hover:text-accent transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
            <span className="font-display font-bold text-foreground">C++ Course</span>
            <span className="hidden sm:inline text-xs text-muted-foreground border-l pl-3 ml-1">
              Made by <span className="font-semibold text-accent">Ovijit Debnath</span> · CSE, RUET
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent/20 hover:text-accent transition-colors"
              aria-label="Search"
              title="Search (Ctrl+K)"
            >
              <Search size={16} />
            </button>
            {user && (
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-2.5 py-1.5 rounded-lg">
                  <User size={12} />
                  <span className="max-w-[120px] truncate">{user.email}</span>
                </div>
                <button
                  onClick={signOut}
                  className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                  aria-label="Sign out"
                  title="Sign out"
                >
                  <LogOut size={16} />
                </button>
              </div>
            )}
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 p-6 lg:p-10">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>

        <Footer />
      </div>

      <ScrollButtons />
    </div>
  );
};

export default CourseLayout;
