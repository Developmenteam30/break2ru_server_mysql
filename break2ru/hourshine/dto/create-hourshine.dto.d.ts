import { User } from 'src/users/entities/user.entity';
export declare class CreateHourshineDto {
    shine_id: number;
    user_id: number;
    user: Promise<User>;
    share_id: number;
    type: string;
    content: string;
    video_url: string;
    thumbnail: string;
    views: number;
    date_time: Date;
    time_Stamp: Date;
}
