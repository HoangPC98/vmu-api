import { WorktimeService } from './worktime.service';
import { CreateWorktimeDto } from './dto/create-worktime.dto';
import { UpdateWorktimeDto } from './dto/update-worktime.dto';
export declare class WorktimeController {
    private readonly worktimeService;
    constructor(worktimeService: WorktimeService);
    create(createWorktimeDto: CreateWorktimeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWorktimeDto: UpdateWorktimeDto): string;
    remove(id: string): string;
}
