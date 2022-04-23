import { CheckinoutService } from './checkinout.service';
import { CreateCheckinoutDto } from './dto/create-checkinout.dto';
import { UpdateCheckinoutDto } from './dto/update-checkinout.dto';
export declare class CheckinoutController {
    private readonly checkinoutService;
    constructor(checkinoutService: CheckinoutService);
    create(createCheckinoutDto: CreateCheckinoutDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCheckinoutDto: UpdateCheckinoutDto): string;
    remove(id: string): string;
    upload(file: any): Promise<{
        message: string;
    }>;
}
