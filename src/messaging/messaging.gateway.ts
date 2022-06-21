import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';
import { MessagingService } from './messaging.service';
import { CreateMessagingDto } from './dto/create-messaging.dto';
import { UpdateMessagingDto } from './dto/update-messaging.dto';
var port = process.env.PORT;
@WebSocketGateway({ namespace: 'messaging' })
export class MessagingGateway implements OnGatewayDisconnect, OnGatewayConnection {
  private readonly logger = new Logger(MessagingGateway.name);
  constructor(private readonly messagingService: MessagingService) {}

  @WebSocketServer()
  wss: Server;

  handleConnection(client: Socket, ...args: any[]): any {
    console.log('connected')
    this.logger.verbose(`Client Connected: ${client.id}`);
  }

  handleDisconnect(client: Socket): any {
    console.log('disconnected')
    this.logger.verbose(`Client Disconnected: ${client.id}`);
  }

  @SubscribeMessage('room.join')
  joinChatRoom(client: Socket, roomId: string) {
    client.join(roomId);
  }

  @SubscribeMessage('room.getoldmsg')
  async getmsgChatRoom(client: Socket, roomId: string) {
    var payload = await this.messagingService.findOne(parseInt(roomId));
    this.wss.to(roomId).emit('message.emit.oldmsgs', payload);
  }

  @SubscribeMessage('room.leave')
  leaveChatRoom(client: Socket, roomId: string) {
    client.leave(roomId);
  }

  @SubscribeMessage('message.emit.server')
  async handleMessage(client: Socket, payload: CreateMessagingDto) {
    payload.time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    var msg = await this.messagingService.create(payload);
    this.wss.to(payload.roomId).emit('message.emit.client', msg);
  }
  
  @SubscribeMessage('createMessaging')
  create(@MessageBody() createMessagingDto: CreateMessagingDto) {
    return this.messagingService.create(createMessagingDto);
  }

  @SubscribeMessage('findOneMessaging')
  findOne(@MessageBody() id: number) {
    return this.messagingService.findOne(id);
  }

  @SubscribeMessage('updateMessaging')
  async update(@MessageBody() updateMessagingDto: UpdateMessagingDto) {
    var msg = await this.messagingService.update(updateMessagingDto.message_id, updateMessagingDto);
    this.wss.to(updateMessagingDto.roomId).emit('message.emit.clientold', msg);
  }

  @SubscribeMessage('removeMessaging')
  remove(@MessageBody() id: number) {
    return this.messagingService.remove(id);
  }
}
