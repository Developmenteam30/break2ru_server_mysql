import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(@InjectRepository(News) private UserModel : Repository<News>) {}
  create(createNewsDto: CreateNewsDto) {
    return this.UserModel.save(createNewsDto);
  }

  async findAll() {
    return await this.UserModel.find();
  }

  async findOne(id: number) {
    return await this.UserModel.findOne(id);
  }

  async update(id: number, updateNewsDto: UpdateNewsDto) {
    return await this.UserModel.update(id, updateNewsDto);
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
