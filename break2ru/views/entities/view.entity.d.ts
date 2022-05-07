import { User } from 'src/users/entities/user.entity';
export declare enum type {
    shine = "shine",
    team = "team",
    video = "video",
    vote = "vote",
    image = "image"
}
export declare class View {
    view_id: number;
    data_id: number;
    user_id: number;
    user: Promise<User>;
    type: type;
}
