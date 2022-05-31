import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HocphanService } from './hocphan.service';
import { CreateHocPhanDto } from './dto/create-hocphan.dto';
import { UpdateHocphanDto } from './dto/update-hocphan.dto';
import { CheckPolicies } from 'src/casl/decorators/CheckPolicies';
import { AppAbility } from 'src/casl/casl-ability.factory';
import { Action } from 'src/casl/Action';
import { HocPhan } from 'src/database/entities/hoc_phan.entity';

@Controller('hoc-phan')
export class HocphanController {
  constructor(private readonly hocphanService: HocphanService) {}

  @Post()
  // @CheckPolicies((ability: AppAbility) => {
  //   return (
  //     ability.can(Action.Create, HocPhan.name)
  //   );
  // })
  taoHocPhan(@Body() createHocphanDto: CreateHocPhanDto) {
    return this.hocphanService.createHocPhan(createHocphanDto);
  }

  @Get()
  getAllHocPhan() {
    return this.hocphanService.getAllHocPhan();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hocphanService.findOne(+id);
  }

  @Patch(':id')
  updateHocPhan(@Param('id') id: string, @Body() updateHocphanDto: UpdateHocphanDto) {
    return this.hocphanService.updateHocPhan(+id, updateHocphanDto);
  }

  @Delete(':id')
  xoaHocPhan(@Param('id') id: string) {
    return this.hocphanService.deleteHocPhan(+id);
  }
}
