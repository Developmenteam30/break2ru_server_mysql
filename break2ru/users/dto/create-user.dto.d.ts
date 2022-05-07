import { PostInfo } from 'src/post-info/entities/post-info.entity';
export declare class CreateUserDto {
    user_id: number;
    first_name: string;
    last_name: string;
    user_name: string;
    user_email: string;
    mob_no: string;
    dob: string;
    gender: string;
    bio: string;
    address: string;
    city: string;
    state: string;
    country: string;
    image: string;
    thumb_img: string;
    cover_photo: string;
    url: string;
    date_time: string;
    token_android: string;
    token_ios: string;
    followerCount: string;
    followingCount: string;
    status: Boolean;
    posts: Promise<PostInfo>;
}
