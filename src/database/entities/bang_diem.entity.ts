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
  id_hoc_vien: number;

  @ManyToOne(() => HocVien, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'id_hoc_vien' })
  hocVien: HocVien;

  @PrimaryColumn()
  id_mon: number;

  @ManyToOne(() => HocPhan)
  @JoinColumn({ name: 'id_mon' })
  hocPhan: HocPhan;

  @Column()
  diem_x: number;

  @Column()
  diem_y: number;

}
