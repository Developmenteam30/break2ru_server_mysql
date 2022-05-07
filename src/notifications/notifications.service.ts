import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './entities/notification.entity';

@Injectable()
export class NotificationsService {
  constructor(@InjectRepository(Notification) private UserModel : Repository<Notification>) {}
  create(createNotificationDto: CreateNotificationDto) {
    var data = this.UserModel.create(createNotificationDto);
    return this.UserModel.save(data);
  }

  async findAll() {
    return await this.UserModel.find();
  }

  async findOne(id: number) {
    return await this.UserModel.find({
      order: { notification_id: "DESC" },
      where: {receiver_id: id}
    });
  }

  async update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return await this.UserModel.update(id, updateNotificationDto);
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
