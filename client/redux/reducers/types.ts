// import { Questions } from "../../components/Game/type";
import { Theme } from '../../components/Game/type';

export type State = {
  theme: Theme[];
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  score: number;
};


export type UsersState = {
  users: User[];
};

export type AuthState = {
  auth: User | undefined;
};

export type Action =
  | { type: 'users/load'; payload: User[] }
  | { type: 'auth/sign-up'; payload: User }
  | { type: 'auth/sign-in'; payload: User }
  | { type: 'theme/load'; payload: Theme[] }
  | { type: 'auth/logout' }
  | { type: 'theme/add'; payload: Theme };
