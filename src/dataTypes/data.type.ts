import { Action, Role } from './enum.types';

export type JwtPayload = {
  user_id: number;
  username: string;
  email: string;
  permissions: JSON;
  user_type: Role;
};

export type Permission = {
  action: Action;
  subject: string;
};
