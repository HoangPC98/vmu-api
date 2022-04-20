import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import CustomBaseEntity from './base.entity';
import { Review } from './review.entity';

@Entity('offworks')
export class Offwork extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  review_id: number;

  @Column('datetime')
  reg_start_at: string;

  @Column('datetime')
  reg_end_at: string;

  @Column()
  reason: string;

  @OneToOne(() => Review, (review) => review.offwork)
  @JoinColumn({ name: 'review_id' })
  review: Review;
}
