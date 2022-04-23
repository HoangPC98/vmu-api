import { Injectable } from '@nestjs/common';
import { CreateWorktimeDto } from './dto/create-worktime.dto';
import { UpdateWorktimeDto } from './dto/update-worktime.dto';
import { arrCheckout, convertCheckinout } from '../helper/supportHandleExcel';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkTime } from '../database/entities/worktime.entity';
import { WorkType } from '../database/entities/worktype.entity';
import { Repository } from 'typeorm';
import { User } from '../database/entities/hoc_vien.entity';
import { IdWorktype } from '../constants/worktype.constant';
@Injectable()
export class WorktimeService {
  constructor(
    @InjectRepository(WorkTime)
    private worktimeRepository: Repository<WorkTime>,
    @InjectRepository(WorkType)
    private worktypeRepository: Repository<WorkType>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(createWorktimeDto: CreateWorktimeDto) {
    return 'This action adds a new worktime';
  }

  findAll() {
    return `This action returns all worktime`;
  }

  findOne(id: number) {
    return `This action returns a #${id} worktime`;
  }

  update(id: number, updateWorktimeDto: UpdateWorktimeDto) {
    return `This action updates a #${id} worktime`;
  }

  remove(id: number) {
    return `This action removes a #${id} worktime`;
  }

  async createRecordFromTimekeeperData(datas) {
    for (const data of datas) {
      // get idFinger
      const idFinger = +data['C'];
      // get checkin
      const checkinStr = data['A'] + ' ' + data['G'] + ':00';
      const checkin = convertCheckinout(checkinStr);
      // get checkout
      let checkoutStr;
      for (let i = 0; i <= arrCheckout.length - 1; i++) {
        const x = data[arrCheckout[i]];
        if (!x) {
          if (data[arrCheckout[i - 1]] === data['G']) {
            checkoutStr = '';
          } else {
            checkoutStr = data['A'] + ' ' + data[arrCheckout[i - 1]] + ':00';
          }
          break;
        }
      }
      const checkout = convertCheckinout(checkoutStr);

      const worktype = await this.worktypeRepository.findOne(
        IdWorktype.Offline,
      );
      const user = await this.userRepository.findOne({
        where: { id_finger: idFinger },
      });
      const worktimeDto = new WorkTime();
      worktimeDto.user_id = user.id;
      worktimeDto.work_type_id = worktype.id;
      worktimeDto.checkin_at = '' + checkin;
      worktimeDto.checkout_at = '' + checkout;
      await this.worktimeRepository.save(worktimeDto);
    }
    return true;
  }
}
