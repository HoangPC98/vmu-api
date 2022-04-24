import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import CustomBaseEntity from './base.entity';
import { ChuyenNganh } from './chuyen_nganh.entity';

@Entity('HocPhan')
export class HocPhan extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  so_tin_chi: number;

  @Column()
  id_chuyen_nganh: string;

  @ManyToOne(() => ChuyenNganh, (chuyenNganh) => chuyenNganh.id)
  @JoinColumn({ name: 'id_chuyen_nganh' })
  chuyenNganh: ChuyenNganh;
}
