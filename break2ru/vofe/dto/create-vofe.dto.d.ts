import { User } from "src/users/entities/user.entity";
export declare class CreateVofeDto {
    vote_id: number;
    userid: number;
    user: Promise<User>;
    image: string;
    Location: string;
    profession: string;
    date_time: Date;
    shows: string;
    timeStamp: Date;
}
