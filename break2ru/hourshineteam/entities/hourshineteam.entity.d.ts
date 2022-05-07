import { User } from 'src/users/entities/user.entity';
export declare class Hourshineteam {
    shine_id: number;
    user_id: number;
    user: Promise<User>;
    share_id: number;
    type: String;
    content: String;
    url: String;
    thumbnail: String;
    date_time: Date;
    views: number;
    time_Stamp: Date;
}
