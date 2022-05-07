import { Test, TestingModule } from '@nestjs/testing';
import { UserVotingController } from './user-voting.controller';
import { UserVotingService } from './user-voting.service';

describe('UserVotingController', () => {
  let controller: UserVotingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserVotingController],
      providers: [UserVotingService],
    }).compile();

    controller = module.get<UserVotingController>(UserVotingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
