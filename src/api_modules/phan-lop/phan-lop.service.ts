import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BangDiem } from 'src/database/entities/bang_diem.entity';
import { LopHocPhan } from 'src/database/entities/lop_hoc_phan.entity';
import { PhanLop } from 'src/database/entities/phanlop.entity';
import { getManager, Repository } from 'typeorm';
import { CreatePhanLopDto } from './dto/create-phan-lop.dto';
import { UpdatePhanLopDto } from './dto/update-phan-lop.dto';

@Injectable()
export class PhanLopService {
  constructor(
    @InjectRepository(LopHocPhan)
    private readonly lopHocPhanRepo: Repository<LopHocPhan>,
    @InjectRepository(PhanLop)
    private readonly phanLopRepo: Repository<PhanLop>,
    @InjectRepository(BangDiem)
    private readonly bangDiemRepo: Repository<BangDiem>,
  ) {}

  private readonly logger = new Logger(PhanLopService.name);

  async addHocVien(id_lop_hoc_phan: number, id_hoc_vien: number): Promise<any> {
    let addHocVienResponseMessage = 'Đăng kí Lớp học phần thành công';
    const getLopHocPhan = await this.lopHocPhanRepo.findOne({
      where: { id: id_lop_hoc_phan },
      relations: ['hocPhan'],
    });
    console.log('hocPhan', getLopHocPhan)
    const getPhanLop = await this.phanLopRepo.find({
      where: { id_lop_hoc_phan },
    });
    if (getPhanLop.length >= getLopHocPhan.si_so_max) {
      addHocVienResponseMessage = `Lớp học phần đã đạt số sinh viên tối đa`;
      this.logger.warn(addHocVienResponseMessage);
      throw new BadRequestException(addHocVienResponseMessage);
    } else {
      const newPhanLopRec = new PhanLop();
      newPhanLopRec.id_hoc_vien = id_hoc_vien;
      newPhanLopRec.id_lop_hoc_phan = id_lop_hoc_phan;

      const newBangDiemRec = new BangDiem();
      newBangDiemRec.id_mon = getLopHocPhan.hocPhan.id;
      newBangDiemRec.id_hoc_vien = id_hoc_vien;
      await getManager().transaction(async (transactionManager) => {
        await transactionManager.save(BangDiem, newBangDiemRec);
        await transactionManager.save(PhanLop, newPhanLopRec);
      });
    }
  }

  findAll() {
    return `This action returns all phanLop`;
  }

  remove(id: number) {
    return `This action removes a #${id} phanLop`;
  }
}
