import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import CustomBaseEntity from './base.entity';
import { GiangVien } from './giang_vien.entity';

@Entity('thong_bao')
export class ThongBao extends CustomBaseEntity {
  @PrimaryGeneratedColumn
    id: string;
}

