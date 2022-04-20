import { Injectable } from '@nestjs/common';
import { CreateCheckinoutDto } from './dto/create-checkinout.dto';
import { UpdateCheckinoutDto } from './dto/update-checkinout.dto';
import * as XLSX from 'xlsx';
import * as path from 'path';
import * as fs from 'fs';
import { WorktimeService } from '../worktime/worktime.service';
@Injectable()
export class CheckinoutService {
  constructor(private readonly worktimeService: WorktimeService) {}

  create(createCheckinoutDto: CreateCheckinoutDto) {
    return 'This action adds a new checkinout';
  }

  findAll() {
    return `This action returns all checkinout`;
  }

  findOne(id: number) {
    return `This action returns a #${id} checkinout`;
  }

  update(id: number, updateCheckinoutDto: UpdateCheckinoutDto) {
    return `This action updates a #${id} checkinout`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkinout`;
  }

  async handleExcelFile(filename: string) {
    const ROW_START_SKIP = 0;
    const ROW_END_SKIP = 3;
    const filePath = path.join(
      __dirname,
      `../../${process.env.UPLOAD_LOCATION}/${filename}`,
    );
    const wb = XLSX.readFile(filePath);
    const sheetName = wb.SheetNames[0];
    const ws = wb.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(ws, { header: 'A', raw: false });
    data.splice(ROW_START_SKIP, ROW_END_SKIP);

    const result = await this.worktimeService.createRecordFromTimekeeperData(
      data,
    );
    if (result) {
      return {
        message: 'Import file successfully.',
      };
    } else {
      return {
        message: 'Import file failed.',
      };
    }
  }
}
