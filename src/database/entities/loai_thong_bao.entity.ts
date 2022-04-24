import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import CustomBaseEntity from './base.entity';

@Entity('LoaiThongBao')
export class LoaiThongBao extends CustomBaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  mo_ta: string;
}
