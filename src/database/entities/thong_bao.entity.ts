import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import CustomBaseEntity from './base.entity';

@Entity('thong_bao')
export class ThongBao extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  id_loai_thong_bao: string;

  @Column()
  tieu_de: string;

  @Column()
  noi_dung: string;

  @Column({ nullable: true, default: null })
  file_dinh_kem: string;
}
