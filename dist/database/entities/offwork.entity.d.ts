import CustomBaseEntity from './base.entity';
import { Review } from './review.entity';
export declare class Offwork extends CustomBaseEntity {
    id: number;
    user_id: number;
    review_id: number;
    reg_start_at: string;
    reg_end_at: string;
    reason: string;
    review: Review;
}
