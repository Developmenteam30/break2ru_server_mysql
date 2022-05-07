import { FollowerService } from './follower.service';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
export declare class FollowerController {
    private readonly followerService;
    constructor(followerService: FollowerService);
    create(createFollowerDto: CreateFollowerDto): Promise<import("typeorm").DeleteResult | import("./entities/follower.entity").Follower>;
    follow(createFollowerDto: CreateFollowerDto): Promise<import("./entities/follower.entity").Follower | {
        status: number;
        msg: string;
    }>;
    findAll(): Promise<import("./entities/follower.entity").Follower[]>;
    findOne(id: number): Promise<import("./entities/follower.entity").Follower[]>;
    findFollowing(id: number): Promise<import("./entities/follower.entity").Follower[]>;
    update(id: number, updateFollowerDto: UpdateFollowerDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
