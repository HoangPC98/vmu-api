import { Module } from '@nestjs/common';
import { ChuyenNganhService } from './chuyen-nghanh.service';
import { ChuyenNganhController } from './chuyen-nghanh.controller';
import { ChuyenNganh } from 'src/database/entities/chuyen_nganh.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ChuyenNganh])],

  controllers: [ChuyenNganhController],
  providers: [ChuyenNganhService],
})
export class ChuyenNganhModule {}
