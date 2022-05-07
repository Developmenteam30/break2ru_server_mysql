import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHashtagDto } from './dto/create-hashtag.dto';
import { UpdateHashtagDto } from './dto/update-hashtag.dto';
import { Hashtag } from './entities/hashtag.entity';

@Injectable()
export class HashtagService {
  constructor(@InjectRepository(Hashtag) private UserModel : Repository<Hashtag>) {}
  create(createHashtagDto: CreateHashtagDto) {
    return this.UserModel.save(createHashtagDto);
  }

  async findAll() {
    return await this.UserModel.find();
  }

  async findOne(id: number) {
    return await this.UserModel.findOne(id);
  }

  async update(id: number, updateHashtagDto: UpdateHashtagDto) {
    return await this.UserModel.update(id, updateHashtagDto);
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
