import { PostInfoService } from './post-info.service';
import { PostInfo } from './entities/post-info.entity';
export declare class PostResolver {
    private readonly postService;
    constructor(postService: PostInfoService);
    findOnePost(id: number): Promise<PostInfo>;
    removePost(id: number): Promise<import("typeorm").DeleteResult>;
}
