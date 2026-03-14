import { useState } from "react";
import CourseLayout from "@/components/CourseLayout";
import CodeBlock from "@/components/CodeBlock";
import { projects } from "@/data/courseData";
import { ChevronDown, FolderGit2 } from "lucide-react";

const Projects = () => {
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <CourseLayout>
      <div className="animate-fade-in">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <FolderGit2 size={14} />
            <span>Practice</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
            Project Tutorials
          </h1>
          <p className="text-muted-foreground">
            Build real projects to solidify your C++ knowledge. Each project includes step-by-step instructions and complete source code.
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border rounded-xl overflow-hidden bg-card card-hover"
            >
              {/* Header */}
              <button
                onClick={() => setOpenProject(openProject === project.id ? null : project.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-lg font-display font-semibold text-card-foreground">
                      {project.title}
                    </h2>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      project.difficulty === "Beginner"
                        ? "bg-success/10 text-success"
                        : project.difficulty === "Intermediate"
                        ? "bg-accent-soft text-accent"
                        : "bg-destructive/10 text-destructive"
                    }`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-muted-foreground transition-transform shrink-0 ml-4 ${
                    openProject === project.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Content */}
              {openProject === project.id && (
                <div className="px-5 pb-5 border-t">
                  {/* Concepts */}
                  <div className="mt-4 mb-4">
                    <h3 className="text-sm font-semibold text-card-foreground mb-2">
                      Concepts Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.concepts.map((c) => (
                        <span
                          key={c}
                          className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-card-foreground mb-2">
                      Steps
                    </h3>
                    <ol className="space-y-1.5">
                      {project.steps.map((step, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="font-bold text-accent shrink-0">{i + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Code */}
                  <div>
                    <h3 className="text-sm font-semibold text-card-foreground mb-2">
                      Complete Code
                    </h3>
                    <CodeBlock code={project.code} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </CourseLayout>
  );
};

export default Projects;
