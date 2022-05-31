import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  OneToMany,
} from 'typeorm';
import { BangDiem } from './bang_diem.entity';
import CustomBaseEntity from './base.entity';
import { ChuyenNganh } from './chuyen_nganh.entity';
import { Khoa } from './khoa.entity';
import { User } from './user.entity';

export enum TrinhDo {
  DAI_HOC = 'dai_hoc',
  THAC_SI = 'thac_si',
  TIEN_SI = 'tien_si',
  GIAO_SU = 'giao_su',
}


@Entity('GiangVien')
export class GiangVien extends CustomBaseEntity {
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

  @Column()
  trinh_do: TrinhDo;
}
