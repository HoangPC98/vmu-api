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

@Entity('PhanLop')
export class PhanLop extends CustomBaseEntity {
  @PrimaryColumn()
  id_lop: string;

  @Column()
  id_hoc_vien: number;

  @Column()
  isActive: boolean;
}
