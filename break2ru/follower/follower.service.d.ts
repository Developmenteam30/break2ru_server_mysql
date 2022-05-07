import { Repository } from 'typeorm';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { Follower } from './entities/follower.entity';
export declare class FollowerService {
    private UserModel;
    constructor(UserModel: Repository<Follower>);
    create(createFollowerDto: CreateFollowerDto): Promise<import("typeorm").DeleteResult | Follower>;
    follow(createFollowerDto: CreateFollowerDto): Promise<Follower | {
        status: number;
        msg: string;
    }>;
    findAll(): Promise<Follower[]>;
    findOne(id: number): Promise<Follower[]>;
    findFollowings(id: number): Promise<Follower[]>;
    update(id: number, updateFollowerDto: UpdateFollowerDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
