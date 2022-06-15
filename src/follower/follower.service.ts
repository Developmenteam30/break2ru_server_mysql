import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { Follower } from './entities/follower.entity';

@Injectable()
export class FollowerService {
  constructor(@InjectRepository(Follower) private UserModel : Repository<Follower>) {}
  async create(createFollowerDto: CreateFollowerDto) {
    var i = await this.UserModel.findOne({where: {
      sender: createFollowerDto.sender,
      receiver: createFollowerDto.receiver,
    }});
    if(i){
      return await this.UserModel.delete(i.follower_id);
    }else{
      var data = this.UserModel.create(createFollowerDto);
      return await this.UserModel.save(data);  
    }
  }

  async follow(createFollowerDto: CreateFollowerDto) {
    var i = await this.UserModel.findOne({where: {
      sender: createFollowerDto.sender,
      receiver: createFollowerDto.receiver,
    }});
    if(i){
      return {status: 0, msg : 'Already following'};
    }else{
      var data = this.UserModel.create(createFollowerDto);
      return await this.UserModel.save(data);  
    }
  }

  async findAll() {
    return await this.UserModel.find();
  }

  async findOne(id: number) {
    return await this.UserModel.find({
      where: {receiver: id}
    });
  }

  async findFollowings(id: number) {
    return await this.UserModel.find({
      where: {sender: id}
    });
  }

  async update(id: number, updateFollowerDto: UpdateFollowerDto) {
    return await this.UserModel.update(id, updateFollowerDto);
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
