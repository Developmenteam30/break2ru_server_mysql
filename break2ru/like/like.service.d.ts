import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { Like } from './entities/Like.entity';
import { Repository } from 'typeorm';
export declare class LikeService {
    private UserModel;
    constructor(UserModel: Repository<Like>);
    create(createLikeDto: CreateLikeDto): Promise<Like>;
    findAll(): Promise<Like[]>;
    findOne(id: number): Promise<[Like[], number]>;
    findOneUser(id: number): Promise<Like[]>;
    update(id: number, updateLikeDto: UpdateLikeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number, post: number): Promise<import("typeorm").DeleteResult>;
}
