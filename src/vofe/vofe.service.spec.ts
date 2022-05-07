import { Test, TestingModule } from '@nestjs/testing';
import { VofeService } from './vofe.service';

describe('VofeService', () => {
  let service: VofeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VofeService],
    }).compile();

    service = module.get<VofeService>(VofeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
