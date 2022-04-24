import { Role } from '../database/entities/phan_quyen.entity';
export declare type JwtPayload = {
    user_id: number;
    username: string;
    email: string;
    user_type: Role;
};
