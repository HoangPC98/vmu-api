import { Role } from 'src/dataTypes/enum.types';
import CustomBaseEntity from './base.entity';
import { User } from './user.entity';
export declare class PhanQuyen extends CustomBaseEntity {
    role: Role;
    mo_ta: string;
    quyen: JSON;
    user: User[];
}
