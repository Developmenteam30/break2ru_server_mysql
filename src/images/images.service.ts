import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ImagesService {
  constructor(@InjectRepository(Image) private UserModel : Repository<Image>) {}
  create(createImageDto: CreateImageDto) {
    createImageDto.img_url = createImageDto.img_url.replace("https://s3-ap-south-1.amazonaws.com/soop1/", "https://d2vaqd2kfxjiiz.cloudfront.net/");
    createImageDto.thumbnail = createImageDto.thumbnail.replace("https://s3-ap-south-1.amazonaws.com/soop1/", "https://d2vaqd2kfxjiiz.cloudfront.net/");
    var data = this.UserModel.create(createImageDto);
    return this.UserModel.save(data);
  }

  async findAll() {
    return await this.UserModel.find({
      relations: ['post'],
      order: {
        'img_id': 'DESC',
      }
    });
  }

  async findOne(id: number) {
    return await this.UserModel.findOne(id);
  }

  async update(id: number, updateImageDto: UpdateImageDto) {
    return await this.UserModel.update(id, updateImageDto);
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
