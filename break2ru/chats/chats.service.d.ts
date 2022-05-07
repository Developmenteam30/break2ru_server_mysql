import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Repository } from 'typeorm';
import { Chat } from './entities/chat.entity';
import { MessagingService } from 'src/messaging/messaging.service';
import { UsersService } from 'src/users/users.service';
export declare class ChatsService {
    private UserModel;
    private readonly messagingservice;
    private userservice;
    constructor(UserModel: Repository<Chat>, messagingservice: MessagingService, userservice: UsersService);
    create(createChatDto: CreateChatDto): Promise<Chat>;
    findAll(to: number): Promise<Chat[]>;
    findOne(id: number, to: number): Promise<Chat[]>;
    sendmsg(id: number, to: number, post_id: number): Promise<number | false>;
    update(id: number, updateChatDto: UpdateChatDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
