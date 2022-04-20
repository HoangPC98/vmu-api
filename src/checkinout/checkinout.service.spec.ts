import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../database/entities/user.entity';
import { WorkTime } from '../database/entities/worktime.entity';
import { WorkType } from '../database/entities/worktype.entity';
import { WorktimeService } from '../worktime/worktime.service';
import { CheckinoutService } from './checkinout.service';

describe('CheckinoutService', () => {
  let service: CheckinoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CheckinoutService,
        WorktimeService,
        {
          provide: getRepositoryToken(WorkType),
          useValue: {
            findOne: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(WorkTime),
          useValue: {
            save: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(User),
          useValue: {
            save: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CheckinoutService>(CheckinoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
