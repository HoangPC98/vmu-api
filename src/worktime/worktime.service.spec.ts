import { Test, TestingModule } from '@nestjs/testing';
import { WorkTime } from '../database/entities/worktime.entity';
import { WorkType } from '../database/entities/worktype.entity';
import { WorktimeService } from './worktime.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../database/entities/hoc_vien.entity';

const datas = [
  {
    A: '12/13/2021',
    B: 'Hai',
    C: '2',
    D: '00001',
    E: 'Chưa SX',
    F: 'Chưa SX',
    G: '13:07',
    H: '15:15',
    I: '18:32',
    S: '1/2/1900',
  },
  {
    A: '12/15/2021',
    B: 'Tư',
    C: '2',
    D: '00001',
    E: 'Chưa SX',
    F: 'Chưa SX',
    G: '08:50',
    H: '18:40',
    S: '1/9/1900',
  },
  {
    A: '12/16/2021',
    B: 'Năm',
    C: '2',
    D: '00001',
    E: 'Chưa SX',
    F: 'Chưa SX',
    G: '08:34',
    H: '17:48',
    I: '18:11',
    J: '19:03',
    S: '1/10/1900',
  },
  {
    A: '12/17/2021',
    B: 'Sáu',
    C: '2',
    D: '00001',
    E: 'Chưa SX',
    F: 'Chưa SX',
    G: '08:38',
    H: '11:02',
    I: '14:04',
    S: '1/2/1900',
  },
];

const workTime = {
  finger_id: 1,
  work_type_id: 1,
  checkin_at: '2022-01-17T01:38:00.000Z',
  checkout_at: '2022-01-17T07:04:00.000Z',
};

const userInDB = {
  id: 1,
  email: 'manhnd@mirabo.com.vn',
  user_type_id: 12,
  name: 'Manh Nguyen Duc',
  desc: '',
  id_finger: 1,
};

const workTypeInDB = { id: 1, desc: 'offine' };

describe('WorktimeService', () => {
  let service: WorktimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WorktimeService,
        {
          provide: getRepositoryToken(WorkType),
          useValue: {
            findOne: jest.fn().mockResolvedValue(workTypeInDB),
          },
        },
        {
          provide: getRepositoryToken(WorkTime),
          useValue: {
            save: jest.fn().mockResolvedValue(workTime),
          },
        },
        {
          provide: getRepositoryToken(User),
          useValue: {
            save: jest.fn().mockResolvedValue(userInDB),
            findOne: jest.fn().mockResolvedValue(userInDB),
          },
        },
      ],
    }).compile();

    service = module.get<WorktimeService>(WorktimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createRecordFromTimekeeperData()', () => {
    it('should successfully insert a worktimes record', async () => {
      const datasInput = datas;
      const retVal = await service.createRecordFromTimekeeperData(datasInput);
      expect(retVal).toEqual(true);
    });
  });
});
