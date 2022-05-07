import { UserVotingService } from './user-voting.service';
import { CreateUserVotingDto } from './dto/create-user-voting.dto';
import { UpdateUserVotingDto } from './dto/update-user-voting.dto';
export declare class UserVotingController {
    private readonly userVotingService;
    constructor(userVotingService: UserVotingService);
    create(createUserVotingDto: CreateUserVotingDto): Promise<import("./entities/user-voting.entity").UserVoting>;
    findAll(): Promise<import("./entities/user-voting.entity").UserVoting[]>;
    findOne(id: number): Promise<import("./entities/user-voting.entity").UserVoting>;
    update(id: number, updateUserVotingDto: UpdateUserVotingDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
