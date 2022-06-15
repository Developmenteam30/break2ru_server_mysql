import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './entities/chat.entity';
import { MessagingService } from 'src/messaging/messaging.service';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class ChatsService {
  constructor(@InjectRepository(Chat) private UserModel : Repository<Chat>, private readonly messagingservice: MessagingService, private userservice: UsersService) {}
  create(createChatDto: CreateChatDto) {
    var data = this.UserModel.create(createChatDto);
    return this.UserModel.save(data);
  }

  async findAll(to: number) {
    return await this.UserModel.find({
      order: { chat_id: "DESC" },
      where: ("(tos = '"+to+"') OR (froms = '"+to+"')")
    });
  }

  async findOne(id: number, to: number) {
    return await this.UserModel.createQueryBuilder('chat')
    .where("(froms = :froms AND tos = :tos) OR (froms = :tos AND tos = :froms)", {froms: id, tos: to})
    .orderBy("timestamps", "DESC")
    .getMany();
  }

  async sendmsg(id: number, to: number, post_id: number) {
    var chatn = await this.UserModel.createQueryBuilder('chat')
    .where("(froms = :froms AND tos = :tos) OR (froms = :tos AND tos = :froms)", {froms: id, tos: to})
    .getOne();
    if(chatn){
      return chatn.chat_id;
    }else{
      return false;
    }
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
