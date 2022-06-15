import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVofeDto } from './dto/create-vofe.dto';
import { UpdateVofeDto } from './dto/update-vofe.dto';
import { Vofe } from './entities/Vofe.entity';

@Injectable()
export class VofeService {
  constructor(@InjectRepository(Vofe) private UserModel : Repository<Vofe>) {}
  create(createVofeDto: CreateVofeDto[]) {
    var d = [];
    createVofeDto.forEach(element=>{
      element.image = element.image.replace("https://s3-ap-south-1.amazonaws.com/soop1/", "https://d2vaqd2kfxjiiz.cloudfront.net/");
      var data = this.UserModel.create(element);
      d.push(this.UserModel.save(data));
    })
    return d;
  }

  async findAll() {
    return await this.UserModel.find();
  }

  async findOne(id: number) {
    return await this.UserModel.findOne({where: {vote_id: id}});
  }

  async update(id: number, updateVofeDto: UpdateVofeDto) {
    return await this.UserModel.update(id, updateVofeDto);
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
