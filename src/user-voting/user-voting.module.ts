import { Module } from '@nestjs/common';
import { UserVotingService } from './user-voting.service';
import { UserVotingController } from './user-voting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserVoting } from './entities/user-voting.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserVoting]),
  ],
  controllers: [UserVotingController],
  providers: [UserVotingService]
})
export class UserVotingModule {}
