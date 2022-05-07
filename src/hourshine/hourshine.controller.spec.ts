import { Test, TestingModule } from '@nestjs/testing';
import { HourshineController } from './hourshine.controller';
import { HourshineService } from './hourshine.service';

describe('HourshineController', () => {
  let controller: HourshineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HourshineController],
      providers: [HourshineService],
    }).compile();

    controller = module.get<HourshineController>(HourshineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
