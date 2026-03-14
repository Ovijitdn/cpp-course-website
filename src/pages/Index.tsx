import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Code2, FolderGit2, GraduationCap, Zap, Trophy, TrendingUp, Sparkles, Target, Search } from "lucide-react";
import { sections } from "@/data/courseData";
import { useProgress } from "@/hooks/useProgress";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import { useState } from "react";
import heroBanner from "@/assets/hero-banner.jpg";
import SearchDialog from "@/components/SearchDialog";

const Index = () => {
  const totalTopics = sections.reduce((sum, s) => sum + s.topics.length, 0);
  const { completedTopics } = useProgress();
  const { user } = useAuth();
  const completedCount = completedTopics.size;
  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
  const [searchOpen, setSearchOpen] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const features = [
    { icon: Target, title: "Structured Path", desc: "10 modules from basics to advanced" },
    { icon: BookOpen, title: "80+ Topics", desc: "Comprehensive with examples" },
    { icon: Sparkles, title: "Interactive", desc: "Notes, bookmarks & progress" },
    { icon: GraduationCap, title: "Interview Prep", desc: "MCQs, challenges & more" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Hero */}
      <section className="relative overflow-hidden hero-gradient text-sidebar-foreground">
        <img
          src={heroBanner}
          alt="C++ Programming Course"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-lighten"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto px-6 py-20 lg:py-32"
        >
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="p-2.5 rounded-2xl bg-accent/20 backdrop-blur-sm glow-accent">
                <Code2 size={28} className="text-accent" />
              </div>
              <span className="text-accent font-display font-bold text-lg tracking-wide">C++ Complete Course</span>
            </motion.div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Master C++ from
              <span className="block accent-gradient bg-clip-text text-transparent drop-shadow-lg" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Zero to Hero
              </span>
            </h1>
            <p className="text-lg text-sidebar-foreground/80 mb-8 leading-relaxed max-w-lg">
              A complete, structured course covering {totalTopics}+ topics — from your first "Hello World" to
              advanced data structures. Every concept explained with commented code examples.
            </p>

            {/* Search Bar */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-3 w-full max-w-md mb-8 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-sidebar-foreground/60 hover:bg-white/15 transition-colors text-left"
            >
              <Search size={18} />
              <span className="text-sm">Search topics, concepts...</span>
              <kbd className="ml-auto text-xs bg-white/10 px-2 py-0.5 rounded">Ctrl+K</kbd>
            </button>

            {/* Progress indicator for logged-in users */}
            {completedCount > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 max-w-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-sidebar-foreground/80 flex items-center gap-1.5">
                    <TrendingUp size={14} />
                    Your Progress
                  </span>
                  <span className="text-sm font-mono font-bold text-accent">{progressPercent}%</span>
                </div>
                <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-full accent-gradient"
                  />
                </div>
                <p className="text-xs text-sidebar-foreground/60 mt-1.5">{completedCount} of {totalTopics} topics completed</p>
              </motion.div>
            )}

            <div className="flex flex-wrap gap-4">
              <Link
                to={`/lesson/${sections[0].topics[0].id}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl accent-gradient text-accent-foreground font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all glow-accent"
              >
                {completedCount > 0 ? "Continue Learning" : "Start Learning"} <ArrowRight size={18} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-sidebar-foreground/20 text-sidebar-foreground font-medium text-base hover:bg-sidebar-foreground/10 transition-colors backdrop-blur-sm"
              >
                View Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto px-6 -mt-6 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-card rounded-xl p-5 border shadow-sm text-center card-hover"
            >
              <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center mx-auto mb-3">
                <feat.icon size={20} className="text-accent-foreground" />
              </div>
              <p className="font-display font-semibold text-card-foreground text-sm">{feat.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Row */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: `${totalTopics}+`, label: "Topics" },
            { value: `${totalTopics}+`, label: "Code Examples" },
            { value: "4", label: "Projects" },
            { value: `${completedCount}`, label: "Completed" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-display font-bold text-accent">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning Path */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-foreground mb-3">
            Your Learning Path
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Follow this structured roadmap from beginner fundamentals to advanced topics and real-world projects.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4"
        >
          {sections.map((section, i) => {
            const sectionCompleted = section.topics.filter(t => completedTopics.has(t.id)).length;
            const sectionProgress = section.topics.length > 0 ? Math.round((sectionCompleted / section.topics.length) * 100) : 0;

            return (
              <motion.div key={section.id} variants={item}>
                <Link
                  to={`/lesson/${section.topics[0].id}`}
                  className="group flex gap-4 p-5 rounded-xl border bg-card card-hover block"
                >
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-2xl">
                    {section.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-muted-foreground font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display font-semibold text-card-foreground group-hover:text-accent transition-colors">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
                      {section.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full accent-gradient transition-all duration-500"
                          style={{ width: `${sectionProgress}%` }}
                        />
                      </div>
                      <span className="text-xs text-accent font-medium shrink-0">
                        {sectionCompleted}/{section.topics.length}
                      </span>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="shrink-0 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all self-center"
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl cta-gradient p-10 text-center text-sidebar-foreground relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
          <div className="relative">
            <Zap size={40} className="mx-auto mb-4 text-accent" />
            <h2 className="text-2xl font-display font-bold mb-3">
              {completedCount > 0 ? "Keep Going!" : "Ready to Start?"}
            </h2>
            <p className="text-sidebar-foreground/70 mb-6 max-w-md mx-auto">
              {completedCount > 0
                ? `You've completed ${completedCount} topics. Keep the momentum going!`
                : "Jump into your first lesson and begin mastering C++ today."}
            </p>
            <Link
              to={`/lesson/${sections[0].topics[0].id}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl accent-gradient text-accent-foreground font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              {completedCount > 0 ? "Continue Learning" : "Begin Chapter 1"} <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-10 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p className="font-display font-bold text-xl text-foreground">
            C++ Complete Course
          </p>
          <p className="text-sm text-muted-foreground">Complete Visual Reference Guide</p>
          <div className="pt-2">
            <p className="text-muted-foreground text-sm">Prepared by</p>
            <p className="font-display font-semibold text-accent text-lg mt-1">
              Ovijit Debnath
            </p>
            <p className="text-muted-foreground text-sm">
              CSE Undergraduate Student · RUET
            </p>
          </div>
          <div className="pt-4 border-t border-border mt-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
