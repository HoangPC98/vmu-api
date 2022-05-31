import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { GiangVien } from 'src/database/entities/giang_vien.entity';
import { HocVien } from 'src/database/entities/hoc_vien.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, GiangVien, HocVien])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
