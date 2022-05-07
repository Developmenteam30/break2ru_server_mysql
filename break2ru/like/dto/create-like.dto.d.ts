import { User } from "src/users/entities/user.entity";
export declare class CreateLikeDto {
    like_id: number;
    user_id: number;
    user: Promise<User>;
    post_id: number;
    type: string;
    time_Stamp: Date;
}
