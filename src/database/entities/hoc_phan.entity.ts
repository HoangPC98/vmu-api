import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import CustomBaseEntity from './base.entity';
import { User } from './hoc_vien.entity';

@Entity('user_types')
export class UserType extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  desc: string;

  @OneToMany(() => User, (user) => user.userType, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  users: User[];

  @Column()
  permissions: string;
}
