import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import CustomBaseEntity from './base.entity';
import { ChuyenNganh } from './chuyen_nganh.entity';
import { Khoa } from './khoa.entity';
import { User } from './user.entity';

@Entity('HocVien')
export class HocVien extends CustomBaseEntity {
  @PrimaryColumn()
  user_id: number;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ nullable: false })
  id_khoa: string;


  @ManyToOne(() => Khoa)
  @JoinColumn({ name: 'id_khoa' })
  khoa: Khoa;

  @Column({ nullable: false })
  id_chuyen_nganh: string;

  @ManyToOne(() => ChuyenNganh)
  @JoinColumn({ name: 'id_chuyen_nghanh' })
  chuyenNganh: ChuyenNganh;


  @Column({ nullable: false })
  ho_ten: string;

  @Column()
  diem_dau_vao: number;

  @Column()
  trang_thai: string;
  
}
