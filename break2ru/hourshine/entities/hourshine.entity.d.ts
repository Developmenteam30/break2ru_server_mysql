import { User } from 'src/users/entities/user.entity';
export declare class Hourshine {
    shine_id: number;
    user_id: number;
    user: Promise<User>;
    share_id: number;
    type: String;
    content: String;
    video_url: String;
    thumbnail: String;
    views: number;
    date_time: Date;
    time_Stamp: Date;
}
