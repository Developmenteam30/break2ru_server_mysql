import { Injectable } from '@nestjs/common';
import { CreateViewDto } from './dto/create-view.dto';
import { UpdateViewDto } from './dto/update-view.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { type, View } from './entities/view.entity';

@Injectable()
export class ViewsService {
  constructor(@InjectRepository(View) private UserModel : Repository<View>) {}
  create(createViewDto: CreateViewDto) {
    var data = this.UserModel.create(createViewDto);
    return this.UserModel.save(data);
  }

  async findAll() {
    return await this.UserModel.find();
  }

  async findOne(id: number, types: string) {
    return await this.UserModel.find({
      order: { view_id: "DESC" },
      where: { data_id: id, type: types as type}
    });
  }

  update(id: number, updateViewDto: UpdateViewDto) {
    return `This action updates a #${id} view`;
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
