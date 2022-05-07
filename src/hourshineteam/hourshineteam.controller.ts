import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HourshineteamService } from './hourshineteam.service';
import { CreateHourshineteamDto } from './dto/create-hourshineteam.dto';
import { UpdateHourshineteamDto } from './dto/update-hourshineteam.dto';

@Controller('hourshineteam')
export class HourshineteamController {
  constructor(private readonly hourshineteamService: HourshineteamService) {}

  @Post()
  create(@Body() createHourshineteamDto: CreateHourshineteamDto) {
    return this.hourshineteamService.create(createHourshineteamDto);
  }

  @Get()
  findAll() {
    return this.hourshineteamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.hourshineteamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateHourshineteamDto: UpdateHourshineteamDto) {
    return this.hourshineteamService.update(+id, updateHourshineteamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.hourshineteamService.remove(+id);
  }
}
