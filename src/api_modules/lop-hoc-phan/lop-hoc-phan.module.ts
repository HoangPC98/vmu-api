import { Module } from '@nestjs/common';
import { LopHocPhanService } from './lop-hoc-phan.service';
import { LopHocPhanController } from './lop-hoc-phan.controller';
import { LopHocPhan } from 'src/database/entities/lop_hoc_phan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhanLop } from 'src/database/entities/phanlop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LopHocPhan, PhanLop])],
  controllers: [LopHocPhanController],
  providers: [LopHocPhanService]
})
export class LopHocPhanModule {}
