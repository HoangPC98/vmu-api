import { CreateCheckinoutDto } from './dto/create-checkinout.dto';
import { UpdateCheckinoutDto } from './dto/update-checkinout.dto';
import { WorktimeService } from '../worktime/worktime.service';
export declare class CheckinoutService {
    private readonly worktimeService;
    constructor(worktimeService: WorktimeService);
    create(createCheckinoutDto: CreateCheckinoutDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCheckinoutDto: UpdateCheckinoutDto): string;
    remove(id: number): string;
    handleExcelFile(filename: string): Promise<{
        message: string;
    }>;
}
