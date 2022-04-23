import CustomBaseEntity from './base.entity';
import { User } from './user.entity';
export declare class UserType extends CustomBaseEntity {
    id: number;
    desc: string;
    users: User[];
    permissions: string;
}
