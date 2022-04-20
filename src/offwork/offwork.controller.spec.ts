import { Test, TestingModule } from '@nestjs/testing';
import { CreateOffworkDto } from './dto/create-offwork.dto';
import { OffworkController } from './offwork.controller';
import { OffworkService } from './offwork.service';

const createOffworkDto: CreateOffworkDto = {
  user_id: 1,
  reason: 'tired',
  reg_end_at: new Date().toISOString(),
  reg_start_at: new Date().toISOString(),
};

describe('OffworkController', () => {
  let offworkController: OffworkController;
  let offworkService: OffworkService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OffworkController],
      providers: [
        OffworkService,
        {
          provide: OffworkService,
          useValue: {
            create: jest
              .fn()
              .mockImplementation((offwork: CreateOffworkDto) =>
                Promise.resolve({ id: 1, ...offwork }),
              ),
          },
        },
      ],
    }).compile();

    offworkController = app.get<OffworkController>(OffworkController);
    offworkService = app.get<OffworkService>(OffworkService);
  });

  it('should be defined', () => {
    expect(offworkController).toBeDefined();
  });

  describe('create()', () => {
    it('should create a offwork', () => {
      offworkController.create(createOffworkDto);
      expect(
        offworkController.create(createOffworkDto),
      ).resolves.toHaveProperty('result', {
        id: 1,
        ...createOffworkDto,
      });
      expect(offworkService.create).toHaveBeenCalledWith(createOffworkDto);
    });
  });
});
