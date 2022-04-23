import { Repository } from 'typeorm';
import { CreateOffworkDto } from './dto/create-offwork.dto';
import { UpdateOffworkDto } from './dto/update-offwork.dto';
import { Offwork } from '../database/entities/offwork.entity';
import { Review } from '../database/entities/review.entity';
import { GetAllOffworkQuery } from './dto/getall-offwork.query';
export declare class OffworkService {
    private readonly offworksRepository;
    private readonly reviewsRepository;
    private readonly logger;
    constructor(offworksRepository: Repository<Offwork>, reviewsRepository: Repository<Review>);
    create(createOffworkDto: CreateOffworkDto): Promise<Offwork>;
    findAll(getAllOffworkQuery: GetAllOffworkQuery): Promise<{
        pageNumber: number;
        count: number;
        data: Offwork[];
        pages: number;
    }>;
    findOne(id: number): Promise<Offwork>;
    update(id: number, updateOffworkDto: UpdateOffworkDto): Promise<string>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
