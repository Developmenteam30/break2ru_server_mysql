import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(createCommentDto: CreateCommentDto): Promise<import("./entities/comment.entity").Comment>;
    findAll(): Promise<import("./entities/comment.entity").Comment[]>;
    findOne(id: number): Promise<import("./entities/comment.entity").Comment[]>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
