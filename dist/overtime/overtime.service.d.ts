import { CreateOvertimeDto } from './dto/create-overtime.dto';
import { UpdateOvertimeDto } from './dto/update-overtime.dto';
export declare class OvertimeService {
    create(createOvertimeDto: CreateOvertimeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOvertimeDto: UpdateOvertimeDto): string;
    remove(id: number): string;
}
