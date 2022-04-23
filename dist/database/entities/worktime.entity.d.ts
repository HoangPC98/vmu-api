import CustomBaseEntity from './base.entity';
import { Review } from './review.entity';
import { WorkType } from './worktype.entity';
export declare class WorkTime extends CustomBaseEntity {
    id: number;
    workType: WorkType;
    work_type_id: number;
    user_id: number;
    review_id: number;
    reg_start_at: string;
    reg_end_at: string;
    checkin_at: string;
    checkout_at: string;
    desc: string;
    review: Review;
}
