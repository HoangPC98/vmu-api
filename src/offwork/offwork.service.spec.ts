import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Offwork } from '../database/entities/user_info.entity';
import { OffworkService } from './offwork.service';
import { Repository } from 'typeorm';
import { CreateOffworkDto } from './dto/create-offwork.dto';
import { Review, ReviewStatus } from '../database/entities/review.entity';

const createDto: CreateOffworkDto = {
  user_id: 1,
  reg_start_at: '2021-12-18T08:00:52.933Z',
  reg_end_at: '2021-12-19T08:00:52.933Z',
  reason: 'tired',
};

const oneReview = {
  id: 10,
  status: 'pending',
  reviewer_id: null,
  note: null,
};

const oneOffwork = {
  ...createDto,
  review_id: oneReview.id,
  id: 6,
};

describe('OffworkService', () => {
  let service: OffworkService;
  let offWorkRepo: Repository<Offwork>;
  let reviewRepo: Repository<Review>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OffworkService,
        {
          provide: getRepositoryToken(Review),
          useValue: {
            save: jest.fn().mockResolvedValue(oneReview),
          },
        },
        {
          provide: getRepositoryToken(Offwork),
          useValue: {
            save: jest.fn().mockResolvedValue(oneOffwork),
          },
        },
      ],
    }).compile();

    service = module.get<OffworkService>(OffworkService);
    offWorkRepo = module.get<Repository<Offwork>>(getRepositoryToken(Offwork));
    reviewRepo = module.get<Repository<Review>>(getRepositoryToken(Review));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('should successfully insert a offwork record', async () => {
      const createDto: CreateOffworkDto = {
        user_id: 1,
        reg_start_at: '2021-12-18T08:00:52.933Z',
        reg_end_at: '2021-12-19T08:00:52.933Z',
        reason: 'tired',
      };
      const createReviewSpy = jest.spyOn(reviewRepo, 'save');
      const createOffowrkSpy = jest.spyOn(offWorkRepo, 'save');
      const retVal = await service.create(createDto);
      expect(createReviewSpy).toBeCalledWith(
        expect.objectContaining({
          status: ReviewStatus.PENDING,
        }),
      );
      expect(createOffowrkSpy).toBeCalledWith(
        expect.objectContaining({
          ...createDto,
          review_id: 10,
        }),
      );
      expect(retVal).toEqual(oneOffwork);
    });
  });
});
