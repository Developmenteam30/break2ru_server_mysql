import { Injectable } from '@nestjs/common';
import { CreateLikeCommentDto } from './dto/create-like-comment.dto';
import { UpdateLikeCommentDto } from './dto/update-like-comment.dto';
import { LikeComment } from './entities/like-comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LikeCommentService {
  constructor(@InjectRepository(LikeComment) private UserModel : Repository<LikeComment>) {}
  create(createLikeCommentDto: CreateLikeCommentDto) {
    var data = this.UserModel.create(createLikeCommentDto);
    return this.UserModel.save(data);
  }

  async findAll() {
    return await this.UserModel.find();
  }

  async findOne(id: number) {
    return await this.UserModel.find({
      where: {comment_id: id}
    });
  }

  async update(id: number, updateLikeCommentDto: UpdateLikeCommentDto) {
    return await this.UserModel.update(id, updateLikeCommentDto);
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
