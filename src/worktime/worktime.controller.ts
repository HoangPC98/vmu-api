import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorktimeService } from './worktime.service';
import { CreateWorktimeDto } from './dto/create-worktime.dto';
import { UpdateWorktimeDto } from './dto/update-worktime.dto';

@Controller('worktime')
export class WorktimeController {
  constructor(private readonly worktimeService: WorktimeService) {}

  @Post()
  create(@Body() createWorktimeDto: CreateWorktimeDto) {
    return this.worktimeService.create(createWorktimeDto);
  }

  @Get()
  findAll() {
    return this.worktimeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.worktimeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWorktimeDto: UpdateWorktimeDto,
  ) {
    return this.worktimeService.update(+id, updateWorktimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.worktimeService.remove(+id);
  }
}
