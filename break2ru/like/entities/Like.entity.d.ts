import { User } from 'src/users/entities/user.entity';
export declare class Like {
    like_id: number;
    user_id: number;
    user: Promise<User>;
    post_id: number;
    type: String;
    time_Stamp: Date;
}
