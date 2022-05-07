import { LikeCommentService } from './like-comment.service';
import { CreateLikeCommentDto } from './dto/create-like-comment.dto';
import { UpdateLikeCommentDto } from './dto/update-like-comment.dto';
export declare class LikeCommentController {
    private readonly likeCommentService;
    constructor(likeCommentService: LikeCommentService);
    create(createLikeCommentDto: CreateLikeCommentDto): Promise<import("./entities/Like-Comment.entity").LikeComment>;
    findAll(): Promise<import("./entities/Like-Comment.entity").LikeComment[]>;
    findOne(id: string): Promise<import("./entities/Like-Comment.entity").LikeComment[]>;
    update(id: string, updateLikeCommentDto: UpdateLikeCommentDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
