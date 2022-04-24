import CustomBaseEntity from './base.entity';
import { ChuyenNganh } from './chuyen_nganh.entity';
export declare class HocPhan extends CustomBaseEntity {
    id: number;
    name: string;
    so_tin_chi: number;
    id_chuyen_nganh: string;
    chuyenNganh: ChuyenNganh;
}
