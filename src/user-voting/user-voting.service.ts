import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserVotingDto } from './dto/create-user-voting.dto';
import { UpdateUserVotingDto } from './dto/update-user-voting.dto';
import { Model } from 'mongoose';
import { UserVoting } from './entities/user-voting.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserVotingService {
  constructor(@InjectRepository(UserVoting) private UserModel : Repository<UserVoting>) {}
  create(createUserVotingDto: CreateUserVotingDto) {
    var data = this.UserModel.create(createUserVotingDto);
    return this.UserModel.save(data);
  }

  async findAll() {
    return await this.UserModel.find();
  }

  async findOne(id: number) {
    return await this.UserModel.findOne(id);
  }

  async update(id: number, updateUserVotingDto: UpdateUserVotingDto) {
    return await this.UserModel.update(id, updateUserVotingDto);
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
