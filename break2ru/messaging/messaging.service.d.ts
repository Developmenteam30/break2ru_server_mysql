import { Repository } from 'typeorm';
import { CreateMessagingDto } from './dto/create-messaging.dto';
import { UpdateMessagingDto } from './dto/update-messaging.dto';
import { Messaging } from './entities/messaging.entity';
export declare class MessagingService {
    private UserModel;
    constructor(UserModel: Repository<Messaging>);
    create(createMessagingDto: CreateMessagingDto): Promise<Messaging>;
    findAll(): string;
    findOne(id: number): Promise<Messaging[]>;
    findOnlyOneMessaging(id: number): Promise<Messaging[]>;
    update(id: number, updateMessagingDto: UpdateMessagingDto): Promise<Messaging[]>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
