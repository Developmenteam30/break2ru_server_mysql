import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessagingDto } from './dto/create-messaging.dto';
import { UpdateMessagingDto } from './dto/update-messaging.dto';
import { Messaging } from './entities/messaging.entity';
import { UsersService } from 'src/users/users.service';
import { NotificationsService } from 'src/notifications.service';
import * as firebase from 'firebase-admin';
@Injectable()
export class MessagingService {
  m: firebase.messaging.TokenMessage =  {token: null, notification: null};
  constructor(@InjectRepository(Messaging) private UserModel : Repository<Messaging>, private readonly usersService: UsersService, private readonly not: NotificationsService) {}
  async create(createMessagingDto: CreateMessagingDto) {
    var data = await this.UserModel.create(createMessagingDto);
    var u = await this.UserModel.save(data);
    var user_id = (await u.senderid).user_id;
    var user = await this.usersService.findonlyOne(user_id);
    this.m.token = user.token_android.toString();
    this.m.notification = {
      "title":"New message from "+(await u.senderid).user_name,
      "body":u.message
    }
    var r = await this.not.sendOne(this.m, false);
    console.log(this.m, r);
    return u;
  }

  findAll() {
    return `This action returns all messaging`;
  }

  async findOne(id: number) {
    return await this.UserModel.find({
      order: {message_id: 'DESC'},
      where: {roomId: id.toString()}
    });
  }

  async findOnlyOneMessaging(id: number) {
    return await this.UserModel.find({
      order: {message_id: 'DESC'},
      where: {roomId: id.toString()}
    });
  }

  async update(id: number, updateMessagingDto: UpdateMessagingDto) {
    await this.UserModel.update(id, updateMessagingDto);
    return await this.UserModel.find({
      order: {message_id: 'DESC'},
      where: {roomId: updateMessagingDto.roomId}
    });
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
