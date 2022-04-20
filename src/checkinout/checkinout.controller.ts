import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from '../config/multer.config';
import { CheckinoutService } from './checkinout.service';
import { CreateCheckinoutDto } from './dto/create-checkinout.dto';
import { UpdateCheckinoutDto } from './dto/update-checkinout.dto';

@Controller('checkinout')
export class CheckinoutController {
  constructor(private readonly checkinoutService: CheckinoutService) {}

  @Post()
  create(@Body() createCheckinoutDto: CreateCheckinoutDto) {
    return this.checkinoutService.create(createCheckinoutDto);
  }

  @Get()
  findAll() {
    return this.checkinoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkinoutService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCheckinoutDto: UpdateCheckinoutDto,
  ) {
    return this.checkinoutService.update(+id, updateCheckinoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkinoutService.remove(+id);
  }

  @Post('timekeeper_datas')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async upload(@UploadedFile() file) {
    return await this.checkinoutService.handleExcelFile(file.filename);
  }
}
