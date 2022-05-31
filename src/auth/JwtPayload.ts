import { Role } from "src/dataTypes/enum.types";


export type JwtPayload = {
  user_id: number;
  username: string;
  email: string;
  permissions: JSON;
  user_type: Role;
};
