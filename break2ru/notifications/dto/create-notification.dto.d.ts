import { User } from "src/users/entities/user.entity";
export declare class CreateNotificationDto {
    notification_id: number;
    type: string;
    sender_id: number;
    user_sender: Promise<User>;
    user_receiver: Promise<User>;
    receiver_id: number;
    post_id: number;
    image: string;
    description: string;
    url: string;
    date_time: Date;
    seen: number;
}
