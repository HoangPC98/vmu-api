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
import { User } from './user.entity';

@Entity('PhienDangNhap')
export class PhienDangNhap extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ nullable: false, unique: true}) 
  username: string;

  @OneToOne(()=> User, (user: User) => user.username)
  @JoinColumn({name: 'username',})
  user: User;

  @Column({ nullable: false, unique: true })
  token: string;
}
