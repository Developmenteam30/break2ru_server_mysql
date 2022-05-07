import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
export declare class ChatsController {
    private readonly chatsService;
    constructor(chatsService: ChatsService);
    create(createChatDto: CreateChatDto): Promise<import("./entities/chat.entity").Chat>;
    findAll(user: any): Promise<import("./entities/chat.entity").Chat[]>;
    findOne(id: number, user: any): Promise<import("./entities/chat.entity").Chat[]>;
    sendmsg(data: any, user: any): Promise<number | false>;
    update(id: number, updateChatDto: UpdateChatDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
