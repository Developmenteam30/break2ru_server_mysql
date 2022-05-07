import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessagingDto } from './dto/create-messaging.dto';
import { UpdateMessagingDto } from './dto/update-messaging.dto';
import { Messaging } from './entities/messaging.entity';

@Injectable()
export class MessagingService {
  constructor(@InjectRepository(Messaging) private UserModel : Repository<Messaging>) {}
  async create(createMessagingDto: CreateMessagingDto) {
    var data = await this.UserModel.create(createMessagingDto);
    return await this.UserModel.save(data);
  }

  findAll() {
    return `This action returns all messaging`;
  }

  async findOne(id: number) {
    return await this.UserModel.find({
      order: {message_id: 'DESC'},
      where: {roomId: id}
    });
  }

  async findOnlyOneMessaging(id: number) {
    return await this.UserModel.find({
      order: {message_id: 'DESC'},
      where: {roomId: id}
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
