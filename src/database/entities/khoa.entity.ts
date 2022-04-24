import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import CustomBaseEntity from './base.entity';

@Entity('Khoa')
export class Khoa extends CustomBaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  ten_khoa: string;

  @Column()
  truong_khoa: string;

  @Column()
  dien_thoai: number;
}
