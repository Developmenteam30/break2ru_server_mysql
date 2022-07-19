import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { Like } from './entities/like.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotificationsService } from 'src/notifications.service';
import * as firebase from 'firebase-admin';

@Injectable()
export class LikeService {
  m: firebase.messaging.TokenMessage =  {token: null, notification: null};
  constructor(@InjectRepository(Like) private UserModel : Repository<Like>, private readonly not: NotificationsService) {}
  async create(createLikeDto: CreateLikeDto) {
    var data = this.UserModel.create(createLikeDto);
    var a = this.UserModel.save(data);
    return a;
  }
  async testnot(){
    this.m.token = "ebL1ZZUje0vpu35JnWFnK0:APA91bG2ZECadEexfeKM_FOH698Zh4CScPAYMKaqpoBR9ZuPpvT-lMjosAYIXMkSsSXSxJHz43xK675SSm8Psb1NlBaOA-5BjkdBYZlyRsa1s5kBV9MiVs6HGkLoqmaDfsL7ohc26bOi";
    this.m.notification = {
      "title":"New message from ",
      "body":"Test msg"
    }
    var r = await this.not.sendOne(this.m, false);
    console.log(r);
  }
  async findAll() {
    return await this.UserModel.find();
  }

  async findOne(id: number) {
    return await this.UserModel.findAndCount({
      where: {post_id: id}
    });
  }

  async findOneUser(id: number) {
    return await this.UserModel.find({
      where: {user_id: id}
    });
  }

  async update(id: number, updateLikeDto: UpdateLikeDto) {
    return await this.UserModel.update(id, updateLikeDto);
  }

  async remove(id: number, post: number) {
    var l = await this.UserModel.findOne({
      where: {post_id: post, user_id: id}
    });
    return await this.UserModel.delete(l.like_id);
  }
}
