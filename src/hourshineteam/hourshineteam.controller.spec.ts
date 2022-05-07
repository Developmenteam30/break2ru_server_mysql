import { Test, TestingModule } from '@nestjs/testing';
import { HourshineteamController } from './hourshineteam.controller';
import { HourshineteamService } from './hourshineteam.service';

describe('HourshineteamController', () => {
  let controller: HourshineteamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HourshineteamController],
      providers: [HourshineteamService],
    }).compile();

    controller = module.get<HourshineteamController>(HourshineteamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
