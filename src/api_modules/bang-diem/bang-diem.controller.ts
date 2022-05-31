import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { BangDiemService } from './bang-diem.service';
import { CreateBangDiemDto } from './dto/create-bang-diem.dto';
import {
  GetBangDiemOneOneQuery,
  GetBangDiemThongKeOfHocVien,
} from './dto/get-bang-diem.dto';
import {
  UpdateBangDiemBody,
  // UpdateBangDiemQuery,
} from './dto/update-bang-diem.dto';

@Controller('bang-diem')
export class BangDiemController {
  constructor(private readonly bangDiemService: BangDiemService) {}

  @Post()
  createBangDiem(@Body() createBangDiemDto: CreateBangDiemDto) {
    return this.bangDiemService.createBangDiem(createBangDiemDto);
  }

  @Get('one-one')
  getOneOne(@Query() getOneOneQuery: GetBangDiemOneOneQuery) {
    return this.bangDiemService.getBangDiemOneUserOneHocPhan(
      +getOneOneQuery.id_hoc_phan,
      +getOneOneQuery.id_hoc_vien,
    );
  }

  @Get('one-hocvien')
  getStatisticOneHocVien(
    @Query() getStatisticOneHocVien: GetBangDiemThongKeOfHocVien,
  ) {
    return this.bangDiemService.getStatisticOneHocVien(
      getStatisticOneHocVien.id_hoc_vien,
    );
  }

  @Patch()
  updateBangDiem(
    @Param(':id_hoc_vien/:id_mon')
    updateQueryString: { id_hoc_vien: number; id_hoc_phan: number },
    @Body() updateBangDiemDto: UpdateBangDiemBody,
  ) {
    return this.bangDiemService.updateBangDiem(
      +updateQueryString.id_hoc_vien,
      +updateQueryString.id_hoc_phan,
      updateBangDiemDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bangDiemService.remove(+id);
  }
}
