import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HocVienService } from './hoc-vien.service';
import { CreateHocVienDto } from './dto/create-hoc-vien.dto';
import { UpdateHocVienDto } from './dto/update-hoc-vien.dto';
import { CheckPolicies } from 'src/casl/decorators/CheckPolicies';
import { AppAbility } from 'src/casl/casl-ability.factory';
import { Action } from 'src/casl/Action';
import { HocVien } from 'src/database/entities/hoc_vien.entity';
import { User } from 'src/database/entities/user.entity';
import { Public } from 'src/auth/decorators/public.auth';

@Controller('hoc-vien')
export class HocVienController {
  constructor(private readonly hocVienService: HocVienService) {}

  @Post('new-hoc-vien')
  // @CheckPolicies((ability: AppAbility) => {
  //   return (
  //     ability.can(Action.Create, HocVien.name)
  //   );
  // })
  createHocVien(@Body() createHocVienDto: CreateHocVienDto) {
    return this.hocVienService.createHocVien(createHocVienDto);
  }

  @Get()
  findAll() {
    return this.hocVienService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hocVienService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHocVienDto: UpdateHocVienDto) {
    return this.hocVienService.update(+id, updateHocVienDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hocVienService.remove(+id);
  }
}
