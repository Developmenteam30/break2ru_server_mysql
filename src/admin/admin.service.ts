import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(@InjectRepository(Admin) private UserModel : Repository<Admin>) {}
  create(createAdminDto: CreateAdminDto) {
    return this.UserModel.save(createAdminDto);
  }

  async findAll() {
    return await this.UserModel.find();
  }

  async findOne(id: number) {
    return await this.UserModel.findOne(id);
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    return await this.UserModel.update(id, updateAdminDto);
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
