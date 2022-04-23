import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import CustomBaseEntity from './base.entity';
import { UserType } from './usertype.entity';

@Entity('users')
export class User extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  id_khoa: string;

  @Column({nullable: false})
  id_chuyen_nganh: string;

  @Column({nullable: false})
  id_info: string;

  @Column({nullable: false})
  ho_ten: string;

  @Column()
  diem_dau_vao: number;

  @Column()
  trang_thai: string;

  @Column()
  quyen: string[];
}
