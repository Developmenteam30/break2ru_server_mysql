import { User } from 'src/users/entities/user.entity';
import { PostInfo } from 'src/post-info/entities/post-info.entity';
export declare class Messaging {
    message_id: number;
    message: string;
    image: string;
    audio: string;
    video: string;
    senderid: Promise<User>;
    post: Promise<PostInfo>;
    roomId: string;
    time: string;
    date: string;
    status: string;
}
