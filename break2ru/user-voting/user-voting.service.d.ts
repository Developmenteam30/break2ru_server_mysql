import { CreateUserVotingDto } from './dto/create-user-voting.dto';
import { UpdateUserVotingDto } from './dto/update-user-voting.dto';
import { UserVoting } from './entities/user-voting.entity';
import { Repository } from 'typeorm';
export declare class UserVotingService {
    private UserModel;
    constructor(UserModel: Repository<UserVoting>);
    create(createUserVotingDto: CreateUserVotingDto): Promise<UserVoting>;
    findAll(): Promise<UserVoting[]>;
    findOne(id: number): Promise<UserVoting>;
    update(id: number, updateUserVotingDto: UpdateUserVotingDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
