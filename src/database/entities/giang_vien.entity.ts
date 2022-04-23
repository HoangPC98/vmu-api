import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import CustomBaseEntity from './base.entity';
import { Offwork } from './user_info.entity';
import { WorkTime } from './worktime.entity';

export enum ReviewStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

@Entity('reviews')
export class Review extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column()
  reviewer_id?: number;

  @Column()
  note: string;

  @OneToOne(() => WorkTime, (workTime) => workTime.review)
  workTime?: WorkTime;

  @OneToOne(() => Offwork, (offwork) => offwork.review)
  offwork?: Offwork;
}
