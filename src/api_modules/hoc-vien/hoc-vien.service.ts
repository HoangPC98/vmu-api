import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HocVien } from 'src/database/entities/hoc_vien.entity';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateHocVienDto } from './dto/create-hoc-vien.dto';
import { UpdateHocVienDto } from './dto/update-hoc-vien.dto';
import { USER_NAME_HOC_VIEN_PREFIX, EMAIL_DOMAIN } from '../../constants/user.constant';
import { Role } from 'src/database/entities/phan_quyen.entity';

@Injectable()
export class HocVienService {
  constructor(
    @InjectRepository(HocVien)
    private readonly hocVienRepo: Repository<HocVien>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async createHocVien(createHocVienDto: CreateHocVienDto) {
    const newUser = new User();
    console.log('new User', newUser);
    newUser.ho_ten = createHocVienDto.ho_ten;
    newUser.ngay_sinh = createHocVienDto.ngay_sinh;
    newUser.gioi_tinh = createHocVienDto.gioi_tinh;
    newUser.user_type = Role.HocVien;
    const newUserCreated = await this.userRepo.save(newUser);
    console.log('new User', newUserCreated);

    const split_name = newUser.ho_ten.toLowerCase().split(' ')
    const username = USER_NAME_HOC_VIEN_PREFIX + newUser.id
    const email = split_name[split_name.length - 1] + username + EMAIL_DOMAIN
    await this.userRepo.update(
      { id: newUserCreated.id },
      {
        username: username,
        password: createHocVienDto.ngay_sinh,
        email: email
      },
    );

    const newHocVien = new HocVien();
    newHocVien.user_id = newUserCreated.id;
    newHocVien.id_chuyen_nganh = createHocVienDto.id_chuyen_nganh;
    newHocVien.id_khoa = createHocVienDto.id_khoa;
    newHocVien.diem_dau_vao = createHocVienDto.diem_dau_vao || 4;
    await this.hocVienRepo.save(newHocVien);
    return {
      message: 'Dang ki hoc vien thanh cong',
    };
  }

  findAll() {
    return `This action returns all hocVien`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hocVien`;
  }

  update(id: number, updateHocVienDto: UpdateHocVienDto) {
    return `This action updates a #${id} hocVien`;
  }

  remove(id: number) {
    return `This action removes a #${id} hocVien`;
  }
}
