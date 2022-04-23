import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Query,
} from '@nestjs/common';
import { OffworkService } from './offwork.service';
import { CreateOffworkDto } from './dto/create-offwork.dto';
import { UpdateOffworkDto } from './dto/update-offwork.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GetAllOffworkQuery } from './dto/getall-offwork.query';
import { AppAbility } from '../casl/casl-ability.factory';
import { CheckPolicies } from '../casl/decorators/CheckPolicies';
import { Action } from '../casl/Action';
import { Offwork } from '../database/entities/user_info.entity';
import { subject } from '@casl/ability';

@ApiBearerAuth()
@ApiTags('offwork')
@Controller('offworks')
export class OffworkController {
  constructor(private readonly offworkService: OffworkService) {}

  @HttpCode(200)
  @Post()
  @CheckPolicies((ability: AppAbility) => {
    return ability.can(Action.Create, Offwork.name);
  })
  async create(@Body() createOffworkDto: CreateOffworkDto) {
    const offworkRec = await this.offworkService.create(createOffworkDto);
    return {
      message: 'success',
      result: offworkRec,
    };
  }

  @Get()
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Read, Offwork.name),
  )
  async findAll(@Query() getAllOffworkQuery: GetAllOffworkQuery) {
    const offworkRecs = await this.offworkService.findAll(getAllOffworkQuery);
    return {
      message: 'success',
      result: offworkRecs,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offworkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOffworkDto: UpdateOffworkDto) {
    return this.offworkService.update(+id, updateOffworkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offworkService.remove(+id);
  }
}
