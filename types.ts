
export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Job {
  id: string;
  title: string;
  type: string;
  description: string;
  requirements: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Tip {
  title: string;
  description: string;
  icon: string;
  type: 'info' | 'warning' | 'success';
}
