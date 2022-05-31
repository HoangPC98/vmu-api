import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  OneToMany,
} from 'typeorm';
import CustomBaseEntity from './base.entity';
import { User } from './user.entity';

export enum Action {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
  ACCESS_API = 'access_api',
}

export enum Role {
  GeneralUser = 'general_user',
  HocVien = 'hoc_vien',
  GiangVien = 'giang_vien',
  Admin = 'admin',
}

export type Permission = {
  action: Action;
  subject: string;
};
@Entity('PhanQuyen')
export class PhanQuyen extends CustomBaseEntity {
  @PrimaryColumn()
  role: Role;

  @Column()
  mo_ta: string;

  @Column('json', { array: true })
  quyen: JSON;

  @OneToMany(()=> User, (user: User) => user.user_type)
  @JoinColumn({name: 'user_type'})
  user: User[];
}
