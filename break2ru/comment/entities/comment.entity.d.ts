import { User } from 'src/users/entities/user.entity';
export declare class Comment {
    comment_id: number;
    post_id: number;
    user_id: number;
    user: Promise<User>;
    text: String;
    email: String;
    date_time: Date;
    likes: number;
    other_comment_id: number;
    other_comment: Promise<Comment>;
}
