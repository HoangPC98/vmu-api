import { Module } from '@nestjs/common';
import { KhoaService } from './khoa.service';
import { KhoaController } from './khoa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChuyenNganh } from 'src/database/entities/chuyen_nganh.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChuyenNganh])],
  controllers: [KhoaController],
  providers: [KhoaService]
})
export class KhoaModule {}
