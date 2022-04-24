import CustomBaseEntity from './base.entity';
import { HocVien } from './hoc_vien.entity';
import { PhanQuyen, Role } from './phan_quyen.entity';
export declare enum GioiTinh {
    NAME = "nam",
    NU = "nu",
    KHAC = "khac"
}
export declare class User extends CustomBaseEntity {
    id: number;
    user_type: Role;
    role: PhanQuyen;
    hocVien: HocVien;
    username: string;
    password: string;
    ho_ten: string;
    ngay_sinh: Date;
    gioi_tinh: GioiTinh;
    dien_thoai: string;
    email: string;
    dia_chi: string;
    trang_thai: string;
}
