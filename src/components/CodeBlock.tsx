import { useState, useMemo } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const highlightCpp = (code: string): string => {
  // Order matters: comments first, then strings, then others
  const tokens: { start: number; end: number; type: string }[] = [];

  // Find single-line comments
  const singleComment = /\/\/.*$/gm;
  let m: RegExpExecArray | null;
  while ((m = singleComment.exec(code)) !== null) {
    tokens.push({ start: m.index, end: m.index + m[0].length, type: "comment" });
  }

  // Find multi-line comments
  const multiComment = /\/\*[\s\S]*?\*\//g;
  while ((m = multiComment.exec(code)) !== null) {
    tokens.push({ start: m.index, end: m.index + m[0].length, type: "comment" });
  }

  // Find strings
  const strings = /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g;
  while ((m = strings.exec(code)) !== null) {
    tokens.push({ start: m.index, end: m.index + m[0].length, type: "string" });
  }

  // Check if a position is inside an already-found token
  const isInToken = (pos: number) => tokens.some(t => pos >= t.start && pos < t.end);

  // Find preprocessor directives
  const preprocessor = /^[ \t]*#\w+/gm;
  while ((m = preprocessor.exec(code)) !== null) {
    if (!isInToken(m.index)) {
      tokens.push({ start: m.index, end: m.index + m[0].length, type: "preprocessor" });
    }
  }

  // Find numbers
  const numbers = /\b\d+\.?\d*[fFLlUu]?\b/g;
  while ((m = numbers.exec(code)) !== null) {
    if (!isInToken(m.index)) {
      tokens.push({ start: m.index, end: m.index + m[0].length, type: "number" });
    }
  }

  // C++ keywords
  const kwPattern = /\b(auto|break|case|catch|class|const|constexpr|continue|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|false|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_cast|struct|switch|template|this|throw|true|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|while)\b/g;
  while ((m = kwPattern.exec(code)) !== null) {
    if (!isInToken(m.index)) {
      tokens.push({ start: m.index, end: m.index + m[0].length, type: "keyword" });
    }
  }

  // Types
  const typePattern = /\b(string|vector|map|set|list|stack|queue|pair|tuple|unique_ptr|shared_ptr|weak_ptr|ifstream|ofstream|fstream|ostream|istream|endl|cout|cin|cerr|npos|size_t|bool|char|wchar_t)\b/g;
  while ((m = typePattern.exec(code)) !== null) {
    if (!isInToken(m.index)) {
      tokens.push({ start: m.index, end: m.index + m[0].length, type: "type" });
    }
  }

  // Sort tokens by start position
  tokens.sort((a, b) => a.start - b.start);

  // Remove overlapping tokens (keep first)
  const filtered: typeof tokens = [];
  let lastEnd = 0;
  for (const t of tokens) {
    if (t.start >= lastEnd) {
      filtered.push(t);
      lastEnd = t.end;
    }
  }

  // Build highlighted HTML
  let result = "";
  let pos = 0;
  for (const t of filtered) {
    if (t.start > pos) {
      result += escapeHtml(code.slice(pos, t.start));
    }
    const cls = `syntax-${t.type}`;
    result += `<span class="${cls}">${escapeHtml(code.slice(t.start, t.end))}</span>`;
    pos = t.end;
  }
  if (pos < code.length) {
    result += escapeHtml(code.slice(pos));
  }

  return result;
};

const escapeHtml = (str: string): string =>
  str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const CodeBlock = ({ code, language = "cpp" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const highlighted = useMemo(() => highlightCpp(code), [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-code-border my-4 glow-primary">
      <div className="flex items-center justify-between px-4 py-2 bg-code-border/30">
        <span className="text-xs font-mono text-code-text/60 uppercase tracking-wider">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="text-code-text/60 hover:text-code-text transition-colors p-1"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto bg-code text-sm leading-relaxed">
        <code
          className="text-code-text font-mono"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </pre>
    </div>
  );
};

export default CodeBlock;
