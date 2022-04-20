import { Test, TestingModule } from '@nestjs/testing';
import { WorktimeService } from '../worktime/worktime.service';
import { CheckinoutController } from './checkinout.controller';
import { CheckinoutService } from './checkinout.service';

describe('CheckinoutController', () => {
  let controller: CheckinoutController;
  let worktimeService: WorktimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckinoutController],
      providers: [
        CheckinoutService,
        WorktimeService,
        {
          provide: WorktimeService,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CheckinoutController>(CheckinoutController);
    worktimeService = module.get<WorktimeService>(WorktimeService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
