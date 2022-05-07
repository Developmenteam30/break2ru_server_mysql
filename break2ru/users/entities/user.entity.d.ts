import { PostInfo } from 'src/post-info/entities/post-info.entity';
export declare class User {
    user_id: number;
    first_name: String;
    last_name: String;
    user_name: String;
    user_email: String;
    mob_no: String;
    dob: String;
    gender: String;
    bio: String;
    address: String;
    city: String;
    state: String;
    country: String;
    image: String;
    thumb_img: String;
    cover_photo: String;
    url: String;
    date_time: String;
    token_android: String;
    token_ios: String;
    followerCount: String;
    followingCount: String;
    status: Boolean;
    posts: Promise<PostInfo[]>;
}
