import { CreateWorktimeDto } from './dto/create-worktime.dto';
import { UpdateWorktimeDto } from './dto/update-worktime.dto';
import { WorkTime } from '../database/entities/worktime.entity';
import { WorkType } from '../database/entities/worktype.entity';
import { Repository } from 'typeorm';
import { User } from '../database/entities/user.entity';
export declare class WorktimeService {
    private worktimeRepository;
    private worktypeRepository;
    private userRepository;
    constructor(worktimeRepository: Repository<WorkTime>, worktypeRepository: Repository<WorkType>, userRepository: Repository<User>);
    create(createWorktimeDto: CreateWorktimeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWorktimeDto: UpdateWorktimeDto): string;
    remove(id: number): string;
    createRecordFromTimekeeperData(datas: any): Promise<boolean>;
}
