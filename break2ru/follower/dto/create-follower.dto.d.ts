import { User } from 'src/users/entities/user.entity';
export declare class CreateFollowerDto {
    follower_id: number;
    sender: number;
    user_sender: Promise<User>;
    receiver: number;
    user_receiver: Promise<User>;
    date_time: Date;
    status: number;
}
