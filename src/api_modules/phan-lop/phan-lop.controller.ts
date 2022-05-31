import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PhanLopService } from './phan-lop.service';
import { CreatePhanLopDto } from './dto/create-phan-lop.dto';
import { UpdatePhanLopDto } from './dto/update-phan-lop.dto';
import { GetUserIdInRequest } from 'src/auth/decorators/getCurrentUser.auth';

@Controller('phan-lop')
export class PhanLopController {
  constructor(private readonly phanLopService: PhanLopService) {}

  @Post('new-hoc-vien/:id_lop_hoc_phan')
  enrollLopHocPhan(
    @Param('id_lop_hoc_phan') id_lop_hoc_phan,
    @GetUserIdInRequest() id_hoc_vien,
  ) {
    console.log(id_lop_hoc_phan, id_hoc_vien);
    return this.phanLopService.addHocVien(+id_lop_hoc_phan, +id_hoc_vien);
  }

  @Get()
  findAll() {
    return this.phanLopService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.phanLopService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePhanLopDto: UpdatePhanLopDto) {
  //   return this.phanLopService.update(+id, updatePhanLopDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phanLopService.remove(+id);
  }
}
