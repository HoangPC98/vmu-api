import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import CustomBaseEntity from "./base.entity";
import { Review } from "./review.entity";

export enum GioiTinh {
  nam = "nam",
  nu = "nữ",
  khac = "khác",
}

@Entity("offworks")
export class UserInfo extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  user_name: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  quyen: string[];

  @Column()
  ngay_sinh: Date;

  @Column({ nullable: false })
  gioi_tinh: GioiTinh;

  @Column({ nullable: true })
  dien_thoai: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: true })
  dia_chi: string;

}
