export interface IContact {
  id: string;
  name: string;
  number: string;
}

export interface SignupCredentials {
  email: string;
  name: string;
  password: string;
}
export interface LoginCredentials {
  email: string;
  password: string;
}

export type onEdit = (id: string) => void;
