import { User } from 'src/users/entities/user.entity';
export declare class LikeComment {
    Ic_id: number;
    user_id: number;
    user: Promise<User>;
    comment_id: number;
    type: String;
    post_id: number;
    timestamp: Date;
}
