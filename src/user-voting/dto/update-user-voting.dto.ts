import { PartialType } from '@nestjs/swagger';
import { CreateUserVotingDto } from './create-user-voting.dto';

export class UpdateUserVotingDto extends PartialType(CreateUserVotingDto) {}
