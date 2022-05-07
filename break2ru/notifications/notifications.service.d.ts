import { Repository } from 'typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './entities/notification.entity';
export declare class NotificationsService {
    private UserModel;
    constructor(UserModel: Repository<Notification>);
    create(createNotificationDto: CreateNotificationDto): Promise<Notification>;
    findAll(): Promise<Notification[]>;
    findOne(id: number): Promise<Notification[]>;
    update(id: number, updateNotificationDto: UpdateNotificationDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
