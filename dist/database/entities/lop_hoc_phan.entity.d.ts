import { Weekday } from 'src/dataTypes/enum.types';
import CustomBaseEntity from './base.entity';
import { GiangVien } from './giang_vien.entity';
import { HocPhan } from './hoc_phan.entity';
export declare class LopHocPhan extends CustomBaseEntity {
    id: number;
    id_mon: number;
    hocPhan: HocPhan;
    id_giang_vien: number;
    giangVien: GiangVien;
    ngay_bat_dau: Date;
    ngay_ket_thuc: Date;
    ngay_hoc: Weekday;
    si_so_max: number;
    si_so_min: number;
    isactive: boolean;
}
