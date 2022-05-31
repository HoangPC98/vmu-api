import { Module } from '@nestjs/common';
import { HocphanService } from './hocphan.service';
import { HocphanController } from './hocphan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HocPhan } from 'src/database/entities/hoc_phan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HocPhan])],
  controllers: [HocphanController],
  providers: [HocphanService]
})
export class HocphanModule {}
