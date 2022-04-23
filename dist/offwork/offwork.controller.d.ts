import { OffworkService } from './offwork.service';
import { CreateOffworkDto } from './dto/create-offwork.dto';
import { UpdateOffworkDto } from './dto/update-offwork.dto';
import { GetAllOffworkQuery } from './dto/getall-offwork.query';
import { Offwork } from '../database/entities/offwork.entity';
export declare class OffworkController {
    private readonly offworkService;
    constructor(offworkService: OffworkService);
    create(createOffworkDto: CreateOffworkDto): Promise<{
        message: string;
        result: Offwork;
    }>;
    findAll(getAllOffworkQuery: GetAllOffworkQuery): Promise<{
        message: string;
        result: {
            pageNumber: number;
            count: number;
            data: Offwork[];
            pages: number;
        };
    }>;
    findOne(id: string): Promise<Offwork>;
    update(id: string, updateOffworkDto: UpdateOffworkDto): Promise<string>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
