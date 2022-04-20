import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOffworkDto } from './dto/create-offwork.dto';
import { UpdateOffworkDto } from './dto/update-offwork.dto';
import { Offwork } from '../database/entities/offwork.entity';
import { Review, ReviewStatus } from '../database/entities/review.entity';
import { GetAllOffworkQuery } from './dto/getall-offwork.query';

@Injectable()
export class OffworkService {
  private readonly logger = new Logger(OffworkService.name);

  constructor(
    @InjectRepository(Offwork)
    private readonly offworksRepository: Repository<Offwork>,
    @InjectRepository(Review)
    private readonly reviewsRepository: Repository<Review>,
  ) {}

  async create(createOffworkDto: CreateOffworkDto) {
    let reviewRec = new Review();
    reviewRec.status = ReviewStatus.PENDING;
    reviewRec = await this.reviewsRepository.save(reviewRec);
    this.logger.log(`created review with id: ${reviewRec.id}`);

    let offworkRec = new Offwork();
    offworkRec.user_id = createOffworkDto.user_id;
    offworkRec.reg_start_at = createOffworkDto.reg_start_at;
    offworkRec.reg_end_at = createOffworkDto.reg_end_at;
    offworkRec.reason = createOffworkDto.reason;
    offworkRec.review_id = reviewRec.id;
    offworkRec = await this.offworksRepository.save(offworkRec);
    this.logger.log(`created offwork record with id: ${offworkRec.id}`);
    return offworkRec;
  }

  async findAll(getAllOffworkQuery: GetAllOffworkQuery) {
    this.logger.debug(
      `findAll with params ${JSON.stringify(getAllOffworkQuery)}`,
    );
    const order = {};
    order[<string>getAllOffworkQuery.order_by] = getAllOffworkQuery.order;

    const [offworkRecs, size] = await this.offworksRepository.findAndCount({
      order,
      skip:
        ((getAllOffworkQuery.page_number || 1) - 1) *
        getAllOffworkQuery.page_size,
      take: getAllOffworkQuery.page_size,
    });
    this.logger.debug(`findAll found ${size} records`);
    return {
      pageNumber: getAllOffworkQuery.page_number || 1,
      count: offworkRecs.length,
      data: offworkRecs,
      pages: Math.round(size / getAllOffworkQuery.page_size) || 1,
    };
  }

  async findOne(id: number) {
    return await this.offworksRepository.findOne(id);
  }

  async update(id: number, updateOffworkDto: UpdateOffworkDto) {
    return `This action updates a #${id} offwork`;
  }

  async remove(id: number) {
    return await this.offworksRepository.delete(id);
  }
}
