import { TrangThaiHoc } from 'src/dataTypes/enum.types';
import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
  ManyToOne,
} from 'typeorm';
import CustomBaseEntity from './base.entity';
import { HocVien } from './hoc_vien.entity';
import { LopHocPhan } from './lop_hoc_phan.entity';



@Entity('PhanLop')
export class PhanLop extends CustomBaseEntity {
  @PrimaryColumn()
  id_hoc_vien: number;

  @ManyToOne(() => HocVien, (hocvien) => hocvien.user_id)
  @JoinColumn({ name: 'id_hoc_vien' })
  hocVien: HocVien;

  @PrimaryColumn()
  id_lop_hoc_phan: number;

  @ManyToOne(() => LopHocPhan, (lop_hoc_phan) => lop_hoc_phan.id)
  @JoinColumn({ name: 'id_lop_hoc_phan' })
  lopHocPhan: LopHocPhan;

  @Column()
  status: TrangThaiHoc;
}
