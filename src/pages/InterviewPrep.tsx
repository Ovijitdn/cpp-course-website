import { useState } from "react";
import CourseLayout from "@/components/CourseLayout";
import CodeBlock from "@/components/CodeBlock";
import { interviewQuestions, mcqs, outputPredictions, codingChallenges } from "@/data/courseData";
import { GraduationCap, ChevronDown, CheckCircle2, XCircle } from "lucide-react";

const InterviewPrep = () => {
  const [activeTab, setActiveTab] = useState<"questions" | "mcq" | "output" | "coding">("questions");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [mcqAnswers, setMcqAnswers] = useState<Record<number, number>>({});
  const [mcqSubmitted, setMcqSubmitted] = useState<Set<number>>(new Set());

  const toggleItem = (idx: number) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  const tabs = [
    { id: "questions" as const, label: "Common Questions" },
    { id: "mcq" as const, label: "MCQs" },
    { id: "output" as const, label: "Output Prediction" },
    { id: "coding" as const, label: "Coding Challenges" },
  ];

  return (
    <CourseLayout>
      <div className="animate-fade-in">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <GraduationCap size={14} />
            <span>Interview Preparation</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
            Interview Prep
          </h1>
          <p className="text-muted-foreground">
            Prepare for C++ interviews with common questions, MCQs, output prediction exercises, and coding challenges.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Common Questions */}
        {activeTab === "questions" && (
          <div className="space-y-3">
            {interviewQuestions.map((q, i) => (
              <div key={i} className="border rounded-lg bg-card overflow-hidden">
                <button
                  onClick={() => toggleItem(i)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="text-sm font-medium text-card-foreground pr-4">
                    {q.question}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-muted-foreground transition-transform ${
                      openItems.has(i) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openItems.has(i) && (
                  <div className="px-4 pb-4 border-t pt-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">{q.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* MCQs */}
        {activeTab === "mcq" && (
          <div className="space-y-6">
            {mcqs.map((q, qi) => (
              <div key={qi} className="border rounded-lg bg-card p-5">
                <p className="text-sm font-medium text-card-foreground mb-3">
                  {qi + 1}. {q.question}
                </p>
                <div className="space-y-2 mb-3">
                  {q.options.map((opt, oi) => {
                    const submitted = mcqSubmitted.has(qi);
                    const selected = mcqAnswers[qi] === oi;
                    const isCorrect = oi === q.correct;

                    return (
                      <button
                        key={oi}
                        onClick={() => {
                          if (!submitted) {
                            setMcqAnswers(prev => ({ ...prev, [qi]: oi }));
                          }
                        }}
                        className={`w-full text-left p-3 rounded-lg text-sm border transition-colors flex items-center gap-2 ${
                          submitted && isCorrect
                            ? "bg-success/10 border-success text-success"
                            : submitted && selected && !isCorrect
                            ? "bg-destructive/10 border-destructive text-destructive"
                            : selected
                            ? "bg-accent-soft border-accent"
                            : "hover:bg-secondary"
                        }`}
                        disabled={submitted}
                      >
                        {submitted && isCorrect && <CheckCircle2 size={14} />}
                        {submitted && selected && !isCorrect && <XCircle size={14} />}
                        <span>{String.fromCharCode(65 + oi)}. {opt}</span>
                      </button>
                    );
                  })}
                </div>
                {mcqAnswers[qi] !== undefined && !mcqSubmitted.has(qi) && (
                  <button
                    onClick={() => setMcqSubmitted(prev => new Set(prev).add(qi))}
                    className="px-4 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
                  >
                    Check Answer
                  </button>
                )}
                {mcqSubmitted.has(qi) && (
                  <p className="text-xs text-muted-foreground mt-2 p-2 bg-secondary rounded">
                    {q.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Output Prediction */}
        {activeTab === "output" && (
          <div className="space-y-6">
            {outputPredictions.map((p, i) => (
              <div key={i} className="border rounded-lg bg-card p-5">
                <p className="text-sm font-medium text-card-foreground mb-2">
                  What is the output of this code?
                </p>
                <CodeBlock code={p.code} />
                <button
                  onClick={() => toggleItem(i + 1000)}
                  className="mt-2 px-4 py-1.5 bg-accent text-accent-foreground rounded-lg text-sm font-medium"
                >
                  {openItems.has(i + 1000) ? "Hide Answer" : "Show Answer"}
                </button>
                {openItems.has(i + 1000) && (
                  <div className="mt-3 p-3 bg-secondary rounded-lg">
                    <p className="text-sm font-mono font-bold text-foreground mb-1">Output: {p.output}</p>
                    <p className="text-xs text-muted-foreground">{p.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Coding Challenges */}
        {activeTab === "coding" && (
          <div className="space-y-6">
            {codingChallenges.map((c, i) => (
              <div key={i} className="border rounded-lg bg-card p-5">
                <h3 className="text-base font-display font-semibold text-card-foreground mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{c.description}</p>
                <div className="mb-3 p-3 bg-accent-soft rounded-lg border border-accent/20">
                  <p className="text-xs text-accent-foreground">
                    <strong>💡 Hint:</strong> {c.hint}
                  </p>
                </div>
                <button
                  onClick={() => toggleItem(i + 2000)}
                  className="px-4 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
                >
                  {openItems.has(i + 2000) ? "Hide Solution" : "Show Solution"}
                </button>
                {openItems.has(i + 2000) && (
                  <div className="mt-3">
                    <CodeBlock code={c.solution} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </CourseLayout>
  );
};

export default InterviewPrep;
