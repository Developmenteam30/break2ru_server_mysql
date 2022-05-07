import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HourshineService } from './hourshine.service';
import { CreateHourshineDto } from './dto/create-hourshine.dto';
import { UpdateHourshineDto } from './dto/update-hourshine.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/users/jwt-auth.guard';

@Controller('hourshine')
export class HourshineController {
  constructor(private readonly hourshineService: HourshineService) {}

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createHourshineDto: CreateHourshineDto[]) {
    return this.hourshineService.create(createHourshineDto);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.hourshineService.findAll();
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hourshineService.findOne(+id);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHourshineDto: UpdateHourshineDto) {
    return this.hourshineService.update(+id, updateHourshineDto);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hourshineService.remove(+id);
  }
}
