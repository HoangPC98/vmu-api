import CustomBaseEntity from './base.entity';
import { HocVien } from './hoc_vien.entity';
import { HocPhan } from './hoc_phan.entity';
export declare class BangDiem extends CustomBaseEntity {
    id_hoc_vien: string;
    hocVien: HocVien;
    id_hoc_phan: string;
    hocPhan: HocPhan;
    diem_x: number;
    diem_y: number;
    diem_btl: number;
    diem_z: number;
    du_dieu_kien: boolean;
}
