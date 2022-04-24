import CustomBaseEntity from './base.entity';
import { User } from './user.entity';
export declare class PhienDangNhap extends CustomBaseEntity {
    id: number;
    username: string;
    user: User;
    token: string;
}
