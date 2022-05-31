import { Injectable } from '@nestjs/common';
import { CreateKhoaDto } from './dto/create-khoa.dto';
import { UpdateKhoaDto } from './dto/update-khoa.dto';

@Injectable()
export class KhoaService {
  createKhoa(createKhoaDto: CreateKhoaDto) {
    return 'This action adds a new khoa';
  }

  getAllKhoa() {
    return `This action returns all khoa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} khoa`;
  }

  updateKhoa(id: number, updateKhoaDto: UpdateKhoaDto) {
    return `This action updates a #${id} khoa`;
  }

  deleteKhoa(id: number) {
    return `This action removes a #${id} khoa`;
  }
}
