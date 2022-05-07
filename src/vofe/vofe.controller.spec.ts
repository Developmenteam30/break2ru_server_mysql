import { Test, TestingModule } from '@nestjs/testing';
import { VofeController } from './vofe.controller';
import { VofeService } from './vofe.service';

describe('VofeController', () => {
  let controller: VofeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VofeController],
      providers: [VofeService],
    }).compile();

    controller = module.get<VofeController>(VofeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
