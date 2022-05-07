import { User } from 'src/users/entities/user.entity';
export declare class Chat {
    chat_id: number;
    froms: number;
    from_user: Promise<User>;
    tos: number;
    to_user: Promise<User>;
    members: number;
    type: number;
}
