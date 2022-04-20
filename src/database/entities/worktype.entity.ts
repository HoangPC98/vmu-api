import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import CustomBaseEntity from './base.entity';
import { WorkTime } from './worktime.entity';

@Entity('work_types')
export class WorkType extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  desc: string;

  @OneToMany(() => WorkTime, (workTime) => workTime.workType)
  workTimes: WorkTime[];
}
