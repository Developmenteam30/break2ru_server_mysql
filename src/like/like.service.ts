import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { Like } from './entities/like.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LikeService {
  constructor(@InjectRepository(Like) private UserModel : Repository<Like>) {}
  create(createLikeDto: CreateLikeDto) {
    var data = this.UserModel.create(createLikeDto);
    return this.UserModel.save(data);
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
