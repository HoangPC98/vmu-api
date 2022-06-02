
import { GioiTinh, Role } from 'src/dataTypes/enum.types';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import CustomBaseEntity from './base.entity';
import { HocVien } from './hoc_vien.entity';
import { Khoa } from './khoa.entity';
import { PhanQuyen} from './phan_quyen.entity';


@Entity('User')
export class User extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_type: Role;

  @ManyToOne(() => PhanQuyen)
  @JoinColumn({ name: 'user_type' })
  role: PhanQuyen;

  @OneToOne(() => HocVien, (hocVien: HocVien) => hocVien.user_id)
  @JoinColumn({ name: 'id' })
  hocVien: HocVien;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  ho_ten: string;

  @Column({ nullable: false })
  ngay_sinh: string;

  @Column({ nullable: true })
  gioi_tinh: GioiTinh;

  @Column({ nullable: true })
  dien_thoai: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: true })
  dia_chi: string;

  @Column({ nullable: true })
  trang_thai: string;
}
