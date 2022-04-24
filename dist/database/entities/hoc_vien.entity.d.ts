import CustomBaseEntity from './base.entity';
import { ChuyenNganh } from './chuyen_nganh.entity';
import { Khoa } from './khoa.entity';
import { User } from './user.entity';
export declare class HocVien extends CustomBaseEntity {
    user_id: number;
    user: User;
    id_khoa: string;
    khoa: Khoa;
    id_chuyen_nganh: string;
    chuyenNganh: ChuyenNganh;
    ho_ten: string;
    diem_dau_vao: number;
    trang_thai: string;
}
