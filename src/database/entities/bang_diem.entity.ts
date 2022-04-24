import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import CustomBaseEntity from './base.entity';
import { HocVien } from './hoc_vien.entity';
import { HocPhan } from './hoc_phan.entity';

@Entity('BangDiem')
export class BangDiem extends CustomBaseEntity {
  @PrimaryColumn()
  id_hoc_vien: string;

  @ManyToOne(() => HocVien)
  @JoinColumn({ name: 'id_hoc_vien' })
  hocVien: HocVien;

  @PrimaryColumn()
  id_hoc_phan: string;

  @ManyToOne(() => HocVien)
  @JoinColumn({ name: 'id_hoc_vien' })
  hocPhan: HocPhan;

  @Column()
  diem_x: number;

  @Column()
  diem_y: number;

  @Column()
  diem_btl: number;

  @Column()
  diem_z: number;

  @Column()
  du_dieu_kien: boolean;
}
