import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import CustomBaseEntity from './base.entity';
import { Khoa } from './khoa.entity';

@Entity('chuyen_nghanh')
export class ChuyenNganh extends CustomBaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  id_khoa: string;

  @ManyToOne(() => Khoa, (khoa) => khoa.id)
  @JoinColumn({ name: 'id_khoa' })
  khoa: Khoa;

  @Column()
  ten_chuyen_nganh: string;
}
