import { Weekday } from 'src/dataTypes/enum.types';
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
import { GiangVien } from './giang_vien.entity';
import { HocPhan } from './hoc_phan.entity';

@Entity('LopHocPhan')
export class LopHocPhan extends CustomBaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  id_mon: number;

  @ManyToOne(() => HocPhan, (hoc_phan) => hoc_phan.id)
  @JoinColumn({ name: 'id_mon' })
  hocPhan: HocPhan;

  @Column()
  id_giang_vien: number;

  @ManyToOne(() => GiangVien, (giang_vien) => giang_vien.user_id)
  @JoinColumn({ name: 'id_giang_vien' })
  giangVien: GiangVien;

  @Column({ nullable: true})
  ngay_bat_dau: Date;

  @Column({ nullable: false})
  ngay_ket_thuc: Date;

  @Column()
  ngay_hoc: Weekday;

  // @Column()
  // tiet_hoc: number;

  @Column()
  si_so_max: number;

  @Column()
  si_so_min: number;

  @Column({ nullable: true, default: false })
  isactive: boolean;
}
