import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { Video } from './entities/video.entity';


@Injectable()
export class VideoService {
  constructor(@InjectRepository(Video) private UserModel : Repository<Video>) {}
  create(createVideoDto: CreateVideoDto) {
    createVideoDto.video_url = createVideoDto.video_url.replace("https://s3-ap-south-1.amazonaws.com/soop1/", "https://d2vaqd2kfxjiiz.cloudfront.net/");
    var data = this.UserModel.create(createVideoDto);
    return this.UserModel.save(data);
  }

  async findAll() {
    return await this.UserModel.find({
      relations: ['post'],
      order: {
        'v_id': 'DESC',
      }
    });
  }

  async findOne(id: number) {
    return await this.UserModel.findOne(id);
  }

  async update(id: number, updateVideoDto: UpdateVideoDto) {
    return await this.UserModel.update(id, updateVideoDto);
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
