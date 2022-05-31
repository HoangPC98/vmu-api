import CustomBaseEntity from './base.entity';
import { HocVien } from './hoc_vien.entity';
import { HocPhan } from './hoc_phan.entity';
export declare class BangDiem extends CustomBaseEntity {
    id_hoc_vien: number;
    hocVien: HocVien;
    id_mon: number;
    hocPhan: HocPhan;
    diem_x: number;
    diem_y: number;
}
