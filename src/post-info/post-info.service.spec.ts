import { Test, TestingModule } from '@nestjs/testing';
import { PostInfoService } from './post-info.service';

describe('PostInfoService', () => {
  let service: PostInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostInfoService],
    }).compile();

    service = module.get<PostInfoService>(PostInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
