import { LikeService } from './like.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
export declare class LikeController {
    private readonly likeService;
    constructor(likeService: LikeService);
    create(createLikeDto: CreateLikeDto): Promise<import("./entities/Like.entity").Like>;
    findAll(): Promise<import("./entities/Like.entity").Like[]>;
    findOne(id: number): Promise<[import("./entities/Like.entity").Like[], number]>;
    findOneUser(id: number): Promise<import("./entities/Like.entity").Like[]>;
    update(id: number, updateLikeDto: UpdateLikeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number, post: number): Promise<import("typeorm").DeleteResult>;
}
