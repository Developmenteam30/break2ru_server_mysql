import { Injectable } from '@nestjs/common';
import { CreatePostInfoDto } from './dto/create-post-info.dto';
import { UpdatePostInfoDto } from './dto/update-post-info.dto';
import { PostInfo } from './entities/post-info.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';


@Injectable()
export class PostInfoService {
  constructor(@InjectRepository(PostInfo) private UserModel : Repository<PostInfo>) {}
  create(createPostInfoDto: CreatePostInfoDto) {
    var data = this.UserModel.create(createPostInfoDto);
    return this.UserModel.save(data);
  }

  async findAll(query){
    const take = query.take || 40
    const skip = query.skip || 0
    return await this.UserModel.find({
      relations: ['images', 'videos'],
      order: { post_id: "DESC" },
      take: take,
      skip: skip
    });
  }

  async findOne(id: number) {
    return await this.UserModel.findOne({
      where: {post_id: id},
      relations: ['images', 'videos']
    });
  }
  
  async findUser(id: number) {
    return await this.UserModel.find({
      relations: ['images', 'videos'],
      order: { post_id: "DESC" },
      where: {user_id: id}
    });
  }

  async findTags(id: string) {
    return await this.UserModel.find({
      relations: ['images', 'videos'],
      order: { post_id: "DESC" },
      where: {hashtag: Like(`%${id}%`)}
    });
  }

  async update(id: number, updatePostInfoDto: UpdatePostInfoDto) {
    return await this.UserModel.update(id, updatePostInfoDto);
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
