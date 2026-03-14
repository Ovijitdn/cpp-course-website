export interface Topic {
  id: string;
  title: string;
  explanation: string;
  syntax?: string;
  example: string;
  codeExplanation: string;
  commonMistakes: string[];
  practiceQuestions: string[];
}

export interface Section {
  id: string;
  title: string;
  emoji: string;
  description: string;
  topics: Topic[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  concepts: string[];
  steps: string[];
  code: string;
}

export interface InterviewQuestion {
  question: string;
  answer: string;
}

export interface MCQ {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface OutputPrediction {
  code: string;
  output: string;
  explanation: string;
}

export interface CodingChallenge {
  title: string;
  description: string;
  hint: string;
  solution: string;
}
