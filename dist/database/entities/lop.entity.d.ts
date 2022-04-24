import CustomBaseEntity from './base.entity';
export declare enum HeDaoTao {
    KI_SU = "ki_su",
    THAC_SI = "thac_si",
    TIEN_SI = "tien_si"
}
export declare class Lop extends CustomBaseEntity {
    id: string;
    he_dao_tao: HeDaoTao;
    id_chuyen_nganh: string;
    id_giang_vien_cn: number;
}
