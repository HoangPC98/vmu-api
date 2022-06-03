import { Role } from 'src/dataTypes/enum.types';
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

import { Action } from '../../dataTypes/enum.types'


@Entity('PhanQuyen')
export class PhanQuyen extends CustomBaseEntity {
  @PrimaryColumn()
  role: Role;

  @Column()
  mo_ta: string;

  @Column()
  quyen: string;

  @OneToMany(()=> User, (user: User) => user.user_type)
  @JoinColumn({name: 'user_type'})
  user: User[];
}
