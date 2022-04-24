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

export enum HeDaoTao {
	KI_SU = 'ki_su',
	THAC_SI = 'thac_si',
	TIEN_SI = 'tien_si'
}

@Entity('lop')
export class Lop extends CustomBaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  he_dao_tao: HeDaoTao;

  @Column()
  id_chuyen_nganh: string;

  @Column()
	id_giang_vien_cn: number;
}
