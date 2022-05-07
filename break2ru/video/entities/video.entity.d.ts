import { PostInfo } from 'src/post-info/entities/post-info.entity';
export declare class Video {
    v_id: number;
    user_id: number;
    post_id: number;
    post: Promise<PostInfo>;
    type: String;
    video_url: String;
    timestamp: Date;
    views: number;
    viewer_user: String;
    vid: number;
    thumbnail: String;
}
