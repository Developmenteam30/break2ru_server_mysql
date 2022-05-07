import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(@InjectRepository(Comment) private UserModel : Repository<Comment>) {}
  create(createCommentDto: CreateCommentDto) {
    var data = this.UserModel.create(createCommentDto);
    return this.UserModel.save(data);
  }

  async findAll() {
    return await this.UserModel.find();
  }

  async findOne(id: number) {
    return await this.UserModel.find({
      order: { comment_id: "DESC" },
      where: {post_id: id}
    });
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    return await this.UserModel.update(id, updateCommentDto);
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
