import { Test, TestingModule } from '@nestjs/testing';
import { WorktimeController } from './worktime.controller';
import { WorktimeService } from './worktime.service';

describe('WorktimeController', () => {
  let controller: WorktimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorktimeController],
      providers: [
        WorktimeService,
        {
          provide: WorktimeService,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<WorktimeController>(WorktimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
