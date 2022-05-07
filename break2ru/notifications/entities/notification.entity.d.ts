import { User } from 'src/users/entities/user.entity';
export declare class Notification {
    notification_id: number;
    type: String;
    sender_id: number;
    user_sender: Promise<User>;
    receiver_id: number;
    user_receiver: Promise<User>;
    post_id: number;
    image: String;
    description: String;
    url: String;
    date_time: Date;
    seen: number;
}
