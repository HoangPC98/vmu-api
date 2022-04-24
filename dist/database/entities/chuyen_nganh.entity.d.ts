import CustomBaseEntity from './base.entity';
import { Khoa } from './khoa.entity';
export declare class ChuyenNganh extends CustomBaseEntity {
    id: string;
    id_khoa: string;
    khoa: Khoa;
    ten_chuyen_nganh: string;
}
