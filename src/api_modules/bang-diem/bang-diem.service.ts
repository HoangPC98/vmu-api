import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BangDiem } from 'src/database/entities/bang_diem.entity';
import { Repository } from 'typeorm';
import { NumberFormat } from 'xlsx';
import { CreateBangDiemDto } from './dto/create-bang-diem.dto';
import { UpdateBangDiemBody } from './dto/update-bang-diem.dto';

@Injectable()
export class BangDiemService {
  constructor(
    @InjectRepository(BangDiem)
    private readonly bangDiemRepo: Repository<BangDiem>,
  ) {}

  async createBangDiem(createBangDiemDto: CreateBangDiemDto) {
    const newBangDiem = new BangDiem();
    newBangDiem.id_mon = createBangDiemDto.id_hoc_phan;
    newBangDiem.id_hoc_vien = createBangDiemDto.id_hoc_vien;
    return await this.bangDiemRepo.create(newBangDiem);
  }

  async getBangDiemOneUserOneHocPhan(id_mon: number, id_hoc_vien: number) {
    console.log('id...', id_mon, id_hoc_vien);
    const oneBangDiem = await this.bangDiemRepo.findOne({
      where: { id_hoc_vien, id_mon },
    });
    const result = this.getBangDiemOneOneResult(oneBangDiem);
    return result;
  }

  async getStatisticOneHocVien(id_hoc_vien: number) {
    const oneBangDiem = await this.bangDiemRepo.find({
      where: { id_hoc_vien },
      relations: ['hocPhan']
    });

    const thongKeVar = {
      TBC_tich_luy: 0,
      tin_chi_tich_luy: 0
    }
    const mapResult = oneBangDiem.map((bangDiemItem) => {
      thongKeVar.tin_chi_tich_luy += bangDiemItem.hocPhan.so_tin_chi
      return this.getBangDiemOneOneResult(bangDiemItem);
    });
    return {
      thong_ke_chung: thongKeVar,
      thong_ke_chi_tiet: mapResult
    }
  }

  async updateBangDiem(
    uid: number,
    id_mon: number,
    updateBangDiemDto: UpdateBangDiemBody,
  ) {
    return await this.bangDiemRepo.update(
      {
        id_hoc_vien: uid,
        id_mon: id_mon,
      },
      updateBangDiemDto,
    );
  }

  remove(id: number) {
    return `This action removes a #${id} bangDiem`;
  }

  private getBangDiemOneOneResult(bangDiemRec: BangDiem) {
    let getBangDiemOneOneResult = {};
    Object.assign(getBangDiemOneOneResult, bangDiemRec);
    if (bangDiemRec.diem_x < 4)
      getBangDiemOneOneResult['du_dieu_kien_thi'] = false;
    else getBangDiemOneOneResult['du_dieu_kien_thi'] = true;
    if (
      getBangDiemOneOneResult['du_dieu_kien_thi'] == true &&
      bangDiemRec.diem_y >= 4
    )
      getBangDiemOneOneResult['hoan_thanh'] = true;
    else getBangDiemOneOneResult['hoan_thanh'] = false;

    getBangDiemOneOneResult['diem_z'] = 0.5 * (bangDiemRec.diem_x + bangDiemRec.diem_y)
    switch (getBangDiemOneOneResult['diem_z']) {
      case 0 - 4:
        getBangDiemOneOneResult['diem_chu'] = 'F';
      case 4.1 - 5:
        getBangDiemOneOneResult['diem_chu'] = 'D';
      case 5 - 6:
        getBangDiemOneOneResult['diem_chu'] = 'D+';
      case 6.1 - 6.5:
        getBangDiemOneOneResult['diem_chu'] = 'C';
      case 6.6 - 7:
        getBangDiemOneOneResult['diem_chu'] = 'C+';
      case 7.1 - 7.5:
        getBangDiemOneOneResult['diem_chu'] = 'B';
      case 7.5 - 8:
        getBangDiemOneOneResult['diem_chu'] = 'B+';
      case 8.1 - 9:
        getBangDiemOneOneResult['diem_chu'] = 'A';
      case 9.1 - 10:
        getBangDiemOneOneResult['diem_chu'] = 'A+';
    }
    return getBangDiemOneOneResult;
  }
}
