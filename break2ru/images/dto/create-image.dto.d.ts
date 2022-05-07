import { PostInfo } from "src/post-info/entities/post-info.entity";
export declare class CreateImageDto {
    img_id: number;
    user_id: number;
    post_id: number;
    post: Promise<PostInfo>;
    type: string;
    img_url: string;
    timestamp: Date;
    thumbnail: string;
}
