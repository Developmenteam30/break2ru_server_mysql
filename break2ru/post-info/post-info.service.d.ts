import { CreatePostInfoDto } from './dto/create-post-info.dto';
import { UpdatePostInfoDto } from './dto/update-post-info.dto';
import { PostInfo } from './entities/post-info.entity';
import { Repository } from 'typeorm';
export declare class PostInfoService {
    private UserModel;
    constructor(UserModel: Repository<PostInfo>);
    create(createPostInfoDto: CreatePostInfoDto): Promise<PostInfo>;
    findAll(query: any): Promise<PostInfo[]>;
    findOne(id: number): Promise<PostInfo>;
    findUser(id: number): Promise<PostInfo[]>;
    findTags(id: string): Promise<PostInfo[]>;
    update(id: number, updatePostInfoDto: UpdatePostInfoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
