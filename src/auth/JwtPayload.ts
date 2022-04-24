import { Action, Permission, Role } from '../database/entities/phan_quyen.entity'

export type JwtPayload = {
  user_id: number;
  username: string;
  email: string;
  // permissions: JSON;
  user_type: Role;
};



