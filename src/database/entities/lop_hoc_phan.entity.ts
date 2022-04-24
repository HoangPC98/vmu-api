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

@Entity('LopHocPhan')
export class LopHocPhan extends CustomBaseEntity {
	@PrimaryColumn()
	id_mon: string;

	@Column()
	id_giang_vien: number;

	@Column()
	lich_hoc_from: Date;

	@Column()
	lich_hoc_to: Date;

	@Column()
	thoi_khoa_bieu: string;

	@Column()
	so_sv_toi_da: number;

	@Column()
	so_sv: number;
}
