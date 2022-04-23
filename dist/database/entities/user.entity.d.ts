import CustomBaseEntity from './base.entity';
import { UserType } from './usertype.entity';
export declare class User extends CustomBaseEntity {
    id: number;
    id_finger: number;
    email: string;
    userType: UserType;
    user_type_id: number;
    name: string;
    desc: string;
    phone: string;
}
