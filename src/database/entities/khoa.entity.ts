import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import CustomBaseEntity from './base.entity';
import { Review } from './review.entity';
import { WorkType } from './worktype.entity';

@Entity('worktimes')
export class WorkTime extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => WorkType, (workType) => workType.workTimes)
  @JoinColumn({ name: 'review_id' })
  workType: WorkType;

  @Column()
  work_type_id: number;

  @Column()
  user_id: number;

  @Column()
  review_id: number;

  @Column('datetime')
  reg_start_at: string;

  @Column('datetime')
  reg_end_at: string;

  @Column('datetime')
  checkin_at: string;

  @Column('datetime')
  checkout_at: string;

  @Column()
  desc: string;

  @OneToOne(() => Review, (review) => review.workTime)
  review: Review;
}
