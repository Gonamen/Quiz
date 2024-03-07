export type Theme = {
  id: number;
  title: string;
  game_id: number;
  Questions: Questions[];
};

export type Questions = {
  id: number;
  text: string;
  answer: string;
  points: number;
  theme_id: number;
  img: string;
};

export type Answer = {
  id: number;
  user_id: number;
  question_id: number;
  text: number;
  correct: boolean;
};
export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  score: number;
};
export type Session = {
  id: number;
  user_id: number;
  game_id: number;
  score: number;
};
export type Game = {
  id: number;
  title: string;
};
