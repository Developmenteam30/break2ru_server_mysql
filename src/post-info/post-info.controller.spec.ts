import { Test, TestingModule } from '@nestjs/testing';
import { PostInfoController } from './post-info.controller';
import { PostInfoService } from './post-info.service';

describe('PostInfoController', () => {
  let controller: PostInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostInfoController],
      providers: [PostInfoService],
    }).compile();

    controller = module.get<PostInfoController>(PostInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
