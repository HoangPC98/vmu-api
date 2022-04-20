import { Module } from '@nestjs/common';
import { CheckinoutService } from './checkinout.service';
import { CheckinoutController } from './checkinout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkTime } from '../database/entities/worktime.entity';
import { WorkType } from '../database/entities/worktype.entity';
import { User } from '../database/entities/user.entity';
import { WorktimeService } from '../worktime/worktime.service';
@Module({
  imports: [TypeOrmModule.forFeature([WorkTime, WorkType, User])],
  controllers: [CheckinoutController],
  providers: [CheckinoutService, WorktimeService],
})
export class CheckinoutModule {}
