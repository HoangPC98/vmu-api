import { Module } from '@nestjs/common';
import { HocVienService } from './hoc-vien.service';
import { HocVienController } from './hoc-vien.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HocVien } from 'src/database/entities/hoc_vien.entity';
import { User } from 'src/database/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HocVien, User])],

  controllers: [HocVienController],
  providers: [HocVienService]
})
export class HocVienModule {}
