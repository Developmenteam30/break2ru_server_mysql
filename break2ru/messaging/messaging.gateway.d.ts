import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessagingService } from './messaging.service';
import { CreateMessagingDto } from './dto/create-messaging.dto';
import { UpdateMessagingDto } from './dto/update-messaging.dto';
export declare class MessagingGateway implements OnGatewayDisconnect, OnGatewayConnection {
    private readonly messagingService;
    private readonly logger;
    constructor(messagingService: MessagingService);
    wss: Server;
    handleConnection(client: Socket, ...args: any[]): any;
    handleDisconnect(client: Socket): any;
    joinChatRoom(client: Socket, roomId: string): void;
    getmsgChatRoom(client: Socket, roomId: string): Promise<void>;
    leaveChatRoom(client: Socket, roomId: string): void;
    handleMessage(client: Socket, payload: CreateMessagingDto): Promise<void>;
    create(createMessagingDto: CreateMessagingDto): Promise<import("./entities/messaging.entity").Messaging>;
    findOne(id: number): Promise<import("./entities/messaging.entity").Messaging[]>;
    update(updateMessagingDto: UpdateMessagingDto): Promise<void>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
