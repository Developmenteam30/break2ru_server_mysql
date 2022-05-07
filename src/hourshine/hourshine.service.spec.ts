import { Test, TestingModule } from '@nestjs/testing';
import { HourshineService } from './hourshine.service';

describe('HourshineService', () => {
  let service: HourshineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HourshineService],
    }).compile();

    service = module.get<HourshineService>(HourshineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
