import { User } from 'src/users/entities/user.entity';
import { Image } from 'src/images/entities/image.entity';
import { Video } from 'src/video/entities/video.entity';
export declare class PostInfo {
    post_id: number;
    user: Promise<User>;
    user_id: number;
    share_id: number;
    share_user_name: String;
    post_type: String;
    text: String;
    hashtag: String;
    userstag: String;
    location: String;
    privacy: String;
    likes: number;
    comment: number;
    status: String;
    date_time: Date;
    time_stamp: Date;
    images: Promise<Image[]>;
    videos: Promise<Video[]>;
}
