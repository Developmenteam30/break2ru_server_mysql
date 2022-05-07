import { PostInfo } from 'src/post-info/entities/post-info.entity';
export declare class Image {
    img_id: number;
    user_id: number;
    post_id: number;
    post: Promise<PostInfo>;
    type: String;
    img_url: String;
    timestamp: Date;
    thumbnail: String;
    views: number;
}
