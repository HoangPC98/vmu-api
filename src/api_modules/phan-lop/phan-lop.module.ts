import { Module } from '@nestjs/common';
import { PhanLopService } from './phan-lop.service';
import { PhanLopController } from './phan-lop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhanLop } from 'src/database/entities/phanlop.entity';
import { LopHocPhan } from 'src/database/entities/lop_hoc_phan.entity';
import { BangDiem } from 'src/database/entities/bang_diem.entity';

@Module({

  imports: [TypeOrmModule.forFeature([PhanLop, LopHocPhan, BangDiem])],
  controllers: [PhanLopController],
  providers: [PhanLopService]
})
export class PhanLopModule {}
