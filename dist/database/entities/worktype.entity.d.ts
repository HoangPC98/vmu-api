import CustomBaseEntity from './base.entity';
import { WorkTime } from './worktime.entity';
export declare class WorkType extends CustomBaseEntity {
    id: number;
    desc: string;
    workTimes: WorkTime[];
}
