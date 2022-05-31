import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChuyenNganhDto } from './dto/create-chuyen-nghanh.dto';
import { UpdateChuyenNganhDto } from './dto/update-chuyen-nghanh.dto';
import { ChuyenNganh } from 'src/database/entities/chuyen_nganh.entity';

@Injectable()
export class ChuyenNganhService {
  constructor(
    @InjectRepository(ChuyenNganh)
    private readonly ChuyenNganhRepo: Repository<ChuyenNganh>,
  ) {}

  async createChuyenNganh(createChuyenNganhDto: CreateChuyenNganhDto) {
    const newChuyenNganhRec = new ChuyenNganh();
    newChuyenNganhRec.id_khoa = createChuyenNganhDto.id_khoa;
    newChuyenNganhRec.ten_chuyen_nganh = createChuyenNganhDto.ten_chuyen_nganh;
    const resultCreateNew = await this.ChuyenNganhRepo.save(newChuyenNganhRec);
    return {
      result: resultCreateNew,
      message: 'tao ban ghi ChuyenNganh thanh cong !',
    };
  }
  findAll() {
    return `This action returns all chuyenNganh`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chuyenNganh`;
  }

  update(id: number, updateChuyenNganhDto: UpdateChuyenNganhDto) {
    return `This action updates a #${id} chuyenNganh`;
  }

  remove(id: number) {
    return `This action removes a #${id} chuyenNganh`;
  }
}
