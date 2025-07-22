export interface QuizQuestion {
  id: string;
  question: string;
  type: 'likert' | 'multiple-choice';
  options: string[];
  section: string;
}

export interface QuizResponse {
  questionId: string;
  answer: number | string;
}

export interface InvestorPersona {
  id: string;
  name: string;
  emoji: string;
  description: string;
  traits: string[];
  tips: string[];
}

export interface BiasScore {
  name: string;
  score: number;
  description: string;
}

export interface QuizResults {
  persona: InvestorPersona;
  biasScores: BiasScore[];
  responses: QuizResponse[];
}

export interface Bias {
  id: string;
  name: string;
  description: string;
  tip: string;
  icon: string;
}