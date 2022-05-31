import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KhoaService } from './khoa.service';
import { CreateKhoaDto } from './dto/create-khoa.dto';
import { UpdateKhoaDto } from './dto/update-khoa.dto';
import { CheckPolicies } from 'src/casl/decorators/CheckPolicies';
import { AppAbility } from 'src/casl/casl-ability.factory';
import { Action } from 'src/casl/Action';
import { Khoa } from 'src/database/entities/khoa.entity';

@Controller('khoa')
export class KhoaController {
  constructor(private readonly khoaService: KhoaService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => {
    return (
      ability.can(Action.Create, Khoa.name)
    );
  })
  createKhoa(@Body() createKhoaDto: CreateKhoaDto) {
    return this.khoaService.createKhoa(createKhoaDto);
  }

  @Get()
  getAllKhoa() {
    return this.khoaService.getAllKhoa();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.khoaService.findOne(+id);
  }

  @Patch(':id')
  updateKhoa(@Param('id') id: string, @Body() updateKhoaDto: UpdateKhoaDto) {
    return this.khoaService.updateKhoa(+id, updateKhoaDto);
  }

  @Delete(':id')
  deleteKhoa(@Param('id') id: string) {
    return this.khoaService.deleteKhoa(+id);
  }
}
