import { Module } from '@nestjs/common';
import { WorktimeService } from './worktime.service';
import { WorktimeController } from './worktime.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkTime } from '../database/entities/worktime.entity';
import { WorkType } from '../database/entities/worktype.entity';
import { User } from '../database/entities/hoc_vien.entity';
@Module({
  imports: [TypeOrmModule.forFeature([WorkTime, WorkType, User])],
  controllers: [WorktimeController],
  providers: [WorktimeService],
})
export class WorktimeModule {}
