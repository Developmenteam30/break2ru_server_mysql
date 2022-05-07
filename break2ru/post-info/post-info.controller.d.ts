import { PostInfoService } from './post-info.service';
import { CreatePostInfoDto } from './dto/create-post-info.dto';
import { UpdatePostInfoDto } from './dto/update-post-info.dto';
export declare class PostInfoController {
    private readonly postInfoService;
    constructor(postInfoService: PostInfoService);
    create(createPostInfoDto: CreatePostInfoDto): Promise<import("./entities/post-info.entity").PostInfo>;
    findAll(take: number, skip: number): Promise<import("./entities/post-info.entity").PostInfo[]>;
    findOne(id: number): Promise<import("./entities/post-info.entity").PostInfo>;
    findU(id: number): Promise<import("./entities/post-info.entity").PostInfo[]>;
    findt(id: string): Promise<import("./entities/post-info.entity").PostInfo[]>;
    update(id: number, updatePostInfoDto: UpdatePostInfoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
