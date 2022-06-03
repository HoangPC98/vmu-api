import { Role } from "src/dataTypes/enum.types";
export declare type JwtPayload = {
    user_id: number;
    username: string;
    email: string;
    permissions: string;
    user_type: Role;
};
