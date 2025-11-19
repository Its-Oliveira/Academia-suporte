export type UserRole = 'admin' | 'student';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  progress: UserProgress[];
}

export interface UserProgress {
  moduleId: string;
  completed: boolean;
  attempts: QuizAttempt[];
  bestScore: number;
}

export interface QuizAttempt {
  date: string;
  score: number;
  answers: number[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  content: string;
  quiz: Quiz;
  duration: string;
}

export interface Quiz {
  questions: Question[];
  passingScore: number;
  maxAttempts: number;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Document {
  id: string;
  title: string;
  moduleId: string;
  fileName: string;
  url: string;
  uploadDate: string;
}
