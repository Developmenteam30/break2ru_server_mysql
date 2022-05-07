import { PostInfo } from "src/post-info/entities/post-info.entity";
export declare class CreateVideoDto {
    v_id: number;
    user_id: number;
    post_id: number;
    post: Promise<PostInfo>;
    type: string;
    video_url: string;
    timestamp: Date;
    views: number;
    viewer_user: string;
    vid: number;
    thumbnail: string;
}
