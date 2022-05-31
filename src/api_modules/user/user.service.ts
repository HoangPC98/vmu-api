import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { USER_NAME_GIANG_VIEN_PREFIX, USER_NAME_HOC_VIEN_PREFIX } from 'src/constants/user.constant';
import { GiangVien } from 'src/database/entities/giang_vien.entity';
import { HocVien } from 'src/database/entities/hoc_vien.entity';
import { User } from 'src/database/entities/user.entity';
import { Role } from 'src/dataTypes/enum.types';
import { getManager, Repository } from 'typeorm';
import { CreateGiangVienDto, CreateHocVienDto, CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(GiangVien)
    private readonly giangVienRepo: Repository<User>,
  ) {}

  async createUser(
    user_type: string,
    createUserDto: CreateUserDto,
    createUserTypeInfoDto: CreateGiangVienDto | CreateHocVienDto,
  ) {
    await getManager().transaction(async (transactionalEntityManager) => {
      const newUser = new User();
      Object.assign(newUser, createUserDto);

      const saveNewUser = await transactionalEntityManager.save(newUser);

      

      let username_prefix: string;

      if (user_type == Role.GiangVien) {
        newUser.user_type = Role.GiangVien;
        username_prefix = USER_NAME_GIANG_VIEN_PREFIX;
        const newGiangVien = new GiangVien();
        Object.assign(newGiangVien, createUserTypeInfoDto);
        newGiangVien.user_id = saveNewUser.id;
        const saveNewGiangVien = await transactionalEntityManager.save(
          newGiangVien,
        );
      }
      else if (user_type == Role.HocVien) {
        username_prefix = USER_NAME_HOC_VIEN_PREFIX;
        newUser.user_type = Role.HocVien;
        const newHocVien = new HocVien();
        Object.assign(newHocVien, createUserTypeInfoDto);
        newHocVien.user_id = saveNewUser.id;
        const saveNewHocVien = await transactionalEntityManager.save(
          newHocVien,
        );
      }

      await transactionalEntityManager.update(
        User,
        {
          ho_ten: saveNewUser.ho_ten,
          email: saveNewUser.email,
        },
        {
          username: username_prefix + saveNewUser.id,
          password: saveNewUser.ngay_sinh,
        },
      );
      return {message: `created user ${user_type} successfully`}
    });
  }

  findAllUser() {
    return `This action returns all user`;
  }

  findOneUser(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
