import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LopHocPhan } from 'src/database/entities/lop_hoc_phan.entity';
import { PhanLop } from 'src/database/entities/phanlop.entity';
import { Repository } from 'typeorm';
import { CreateLopHocPhanDto } from './dto/create-lop-hoc-phan.dto';
import { UpdateLopHocPhanDto } from './dto/update-lop-hoc-phan.dto';

@Injectable()
export class LopHocPhanService {
  constructor(
    @InjectRepository(LopHocPhan)
    private readonly lopHocPhanRepo: Repository<LopHocPhan>,
    @InjectRepository(PhanLop)
    private readonly phanLopRepo: Repository<PhanLop>,
  ) {}

  async createLopHocPhan(createLopHocPhanDto: CreateLopHocPhanDto) {
    const newLopHocPhan = new LopHocPhan();
    const assign = Object.assign(newLopHocPhan, createLopHocPhanDto);
    console.log('newLopHocPhan', newLopHocPhan, assign);
    return await this.lopHocPhanRepo.save(newLopHocPhan);
  }

  findAll() {
    return `This action returns all lopHocPhan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lopHocPhan`;
  }

  update(id: number, updateLopHocPhanDto: UpdateLopHocPhanDto) {
    return `This action updates a #${id} lopHocPhan`;
  }

  remove(id: number) {
    return `This action removes a #${id} lopHocPhan`;
  }

  async checkIsActiveAndAvailable(id_lop_hoc_phan: number, si_so_max: number) {
    let isActive = false;
    let isAvailable = true;
    const getPhanLop = await this.phanLopRepo.find({
      where: { id_lop_hoc_phan: id_lop_hoc_phan },
    });
    if (getPhanLop.length >= si_so_max) {
      isActive = true;
      isAvailable = false;
    }
    return { isActive, isAvailable };
  }
}
