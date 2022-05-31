import { Module } from '@nestjs/common';
import { BangDiemService } from './bang-diem.service';
import { BangDiemController } from './bang-diem.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BangDiem } from 'src/database/entities/bang_diem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BangDiem])],
  controllers: [BangDiemController],
  providers: [BangDiemService]
})
export class BangDiemModule {}
