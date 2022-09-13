import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HourshineteamService } from './hourshineteam.service';
import { CreateHourshineteamDto } from './dto/create-hourshineteam.dto';
import { UpdateHourshineteamDto } from './dto/update-hourshineteam.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/users/jwt-auth.guard';

@Controller('hourshineteam')
export class HourshineteamController {
  constructor(private readonly hourshineteamService: HourshineteamService) {}

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createHourshineteamDto: CreateHourshineteamDto) {
    return this.hourshineteamService.create(createHourshineteamDto);
  }

  @Get()
  findAll() {
    return this.hourshineteamService.findAll();
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.hourshineteamService.findOne(+id);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateHourshineteamDto: UpdateHourshineteamDto) {
    return this.hourshineteamService.update(+id, updateHourshineteamDto);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.hourshineteamService.remove(+id);
  }
}
