import { User } from 'src/users/entities/user.entity';
import { Comment } from '../entities/comment.entity';
export declare class CreateCommentDto {
    comment_id: number;
    post_id: number;
    user_id: number;
    user: Promise<User>;
    text: string;
    email: string;
    date_time: Date;
    likes: number;
    other_comment_id: number;
    other_comment: Promise<Comment>;
}
