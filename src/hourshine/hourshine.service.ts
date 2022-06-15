import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHourshineDto } from './dto/create-hourshine.dto';
import { UpdateHourshineDto } from './dto/update-hourshine.dto';
import { Hourshine } from './entities/hourshine.entity';

@Injectable()
export class HourshineService {
  constructor(@InjectRepository(Hourshine) private UserModel : Repository<Hourshine>) {}
  async create(createHourshineDto: CreateHourshineDto[]) {
    var d = [];
    createHourshineDto.forEach(element=>{
      element.video_url = element.video_url.replace("https://s3-ap-south-1.amazonaws.com/soop1/", "https://d2vaqd2kfxjiiz.cloudfront.net/");
      var data = this.UserModel.create(element);
      d.push(this.UserModel.save(data));
    })
    return d;
  }

  async findAll() {
    return await this.UserModel.find();
  }

  async findOne(id: number) {
    return await this.UserModel.findOne({where: {shine_id: id}});
  }

  async update(id: number, updateHourshineDto: UpdateHourshineDto) {
    return await this.UserModel.update(id, updateHourshineDto);
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
