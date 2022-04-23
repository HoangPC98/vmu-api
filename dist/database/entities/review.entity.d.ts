import CustomBaseEntity from './base.entity';
import { Offwork } from './offwork.entity';
import { WorkTime } from './worktime.entity';
export declare enum ReviewStatus {
    PENDING = "pending",
    APPROVED = "approved",
    REJECTED = "rejected"
}
export declare class Review extends CustomBaseEntity {
    id: number;
    status: string;
    reviewer_id?: number;
    note: string;
    workTime?: WorkTime;
    offwork?: Offwork;
}
