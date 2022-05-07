import { Test, TestingModule } from '@nestjs/testing';
import { HourshineteamService } from './hourshineteam.service';

describe('HourshineteamService', () => {
  let service: HourshineteamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HourshineteamService],
    }).compile();

    service = module.get<HourshineteamService>(HourshineteamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
