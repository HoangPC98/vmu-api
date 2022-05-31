import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppAbility } from 'src/casl/casl-ability.factory';
import { Action } from '../../casl/Action';
import { CheckPolicies } from 'src/casl/decorators/CheckPolicies';
import { ChuyenNganhService } from './chuyen-nghanh.service';
import { CreateChuyenNganhDto } from './dto/create-chuyen-nghanh.dto';
import { UpdateChuyenNganhDto } from './dto/update-chuyen-nghanh.dto';
import { ChuyenNganh } from 'src/database/entities/chuyen_nganh.entity';

@Controller('chuyen-nghanh')
export class ChuyenNganhController {
  constructor(private readonly ChuyenNganhService: ChuyenNganhService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => {
    return (
      ability.can(Action.Create, ChuyenNganh.name)
    );
  })
  create(@Body() createChuyenNganhDto: CreateChuyenNganhDto) {
    return this.ChuyenNganhService.createChuyenNganh(createChuyenNganhDto);
  }

  @Get()
  findAll() {
    return this.ChuyenNganhService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ChuyenNganhService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChuyenNganhDto: UpdateChuyenNganhDto,
  ) {
    return this.ChuyenNganhService.update(+id, updateChuyenNganhDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ChuyenNganhService.remove(+id);
  }
}
