import { OvertimeService } from './overtime.service';
import { CreateOvertimeDto } from './dto/create-overtime.dto';
import { UpdateOvertimeDto } from './dto/update-overtime.dto';
export declare class OvertimeController {
    private readonly overtimeService;
    constructor(overtimeService: OvertimeService);
    create(createOvertimeDto: CreateOvertimeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOvertimeDto: UpdateOvertimeDto): string;
    remove(id: string): string;
}
