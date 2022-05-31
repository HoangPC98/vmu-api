import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HocPhan } from 'src/database/entities/hoc_phan.entity';
import { Repository } from 'typeorm';
import { CreateHocPhanDto } from './dto/create-hocphan.dto';
import { UpdateHocphanDto } from './dto/update-hocphan.dto';

@Injectable()
export class HocphanService {
  constructor(
    @InjectRepository(HocPhan)
    private readonly hocPhanRepo: Repository<HocPhan>,
  ) {}
  async createHocPhan(createHocphanDto: CreateHocPhanDto) {
    const newHocPhanRec = new HocPhan();
    newHocPhanRec.name = createHocphanDto.ten;
    newHocPhanRec.id_chuyen_nganh = createHocphanDto.ma_chuyen_nganh;
    newHocPhanRec.so_tin_chi = createHocphanDto.so_tin_chi;
    const resultCreateNew = await this.hocPhanRepo.save(newHocPhanRec);
    return {
      result: resultCreateNew,
      message: 'tao ban ghi HocPhan thanh cong !',
    };
  }

  getAllHocPhan() {
    return `This action returns all hocphan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hocphan`;
  }

  updateHocPhan(id: number, updateHocphanDto: UpdateHocphanDto) {
    return `This action updates a #${id} hocphan`;
  }

  deleteHocPhan(id: number) {
    return `This action removes a #${id} hocphan`;
  }
}
