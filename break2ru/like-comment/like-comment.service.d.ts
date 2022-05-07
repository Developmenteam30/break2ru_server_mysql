import { CreateLikeCommentDto } from './dto/create-like-comment.dto';
import { UpdateLikeCommentDto } from './dto/update-like-comment.dto';
import { LikeComment } from './entities/Like-Comment.entity';
import { Repository } from 'typeorm';
export declare class LikeCommentService {
    private UserModel;
    constructor(UserModel: Repository<LikeComment>);
    create(createLikeCommentDto: CreateLikeCommentDto): Promise<LikeComment>;
    findAll(): Promise<LikeComment[]>;
    findOne(id: number): Promise<LikeComment[]>;
    update(id: number, updateLikeCommentDto: UpdateLikeCommentDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
