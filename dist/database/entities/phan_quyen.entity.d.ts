import CustomBaseEntity from './base.entity';
import { User } from './user.entity';
export declare enum Action {
    CREATE = "create",
    READ = "read",
    UPDATE = "update",
    DELETE = "delete",
    ACCESS_API = "access_api"
}
export declare enum Role {
    GeneralUser = "general_user",
    HocVien = "hoc_vien",
    GiangVien = "giang_vien",
    Admin = "admin"
}
export declare type Permission = {
    action: Action;
    subject: string;
};
export declare class PhanQuyen extends CustomBaseEntity {
    role: Role;
    mo_ta: string;
    quyen: JSON;
    user: User[];
}
