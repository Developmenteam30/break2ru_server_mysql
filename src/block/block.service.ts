import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { Block } from './entities/block.entity';

@Injectable()
export class BlockService {
  constructor(@InjectRepository(Block) private UserModel : Repository<Block>) {}
  create(createBlockDto: CreateBlockDto) {
    var data =  this.UserModel.create(createBlockDto);
    return  this.UserModel.save(data);
  }

  async findAll() {
    return await this.UserModel.find();
  }

  async findOne(id: number) {
    return await this.UserModel.findOne({where: {block_id: id}});
  }

  async update(id: number, updateBlockDto: UpdateBlockDto) {
    return await this.UserModel.update(id, updateBlockDto);
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
