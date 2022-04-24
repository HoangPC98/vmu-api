import CustomBaseEntity from './base.entity';
export declare class LopHocPhan extends CustomBaseEntity {
    id_mon: string;
    id_giang_vien: number;
    lich_hoc_from: Date;
    lich_hoc_to: Date;
    thoi_khoa_bieu: string;
    so_sv_toi_da: number;
    so_sv: number;
}
