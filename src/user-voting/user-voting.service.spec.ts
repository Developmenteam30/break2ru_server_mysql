import { Test, TestingModule } from '@nestjs/testing';
import { UserVotingService } from './user-voting.service';

describe('UserVotingService', () => {
  let service: UserVotingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserVotingService],
    }).compile();

    service = module.get<UserVotingService>(UserVotingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
