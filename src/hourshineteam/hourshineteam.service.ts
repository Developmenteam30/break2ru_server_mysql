import { Injectable } from '@nestjs/common';
import { CreateHourshineteamDto } from './dto/create-hourshineteam.dto';
import { UpdateHourshineteamDto } from './dto/update-hourshineteam.dto';
import { Hourshineteam } from './entities/hourshineteam.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HourshineteamService {
  constructor(@InjectRepository(Hourshineteam) private UserModel : Repository<Hourshineteam>) {}
  create(createHourshineteamDto: CreateHourshineteamDto) {
    var data = this.UserModel.create(createHourshineteamDto);
    return this.UserModel.save(data);
  }

  async findAll() {
    return await this.UserModel.find();
  }

  async findOne(id: number) {
    return await this.UserModel.findOne({where: {shine_id: id}});
  }

  async update(id: number, updateHourshineteamDto: UpdateHourshineteamDto) {
    return await this.UserModel.update(id, updateHourshineteamDto);
  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }
}
