import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VofeService } from './vofe.service';
import { CreateVofeDto } from './dto/create-vofe.dto';
import { UpdateVofeDto } from './dto/update-vofe.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../users/jwt-auth.guard';

@Controller('vofe')
export class VofeController {
  constructor(private readonly vofeService: VofeService) {}

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createVofeDto: CreateVofeDto[]) {
    return this.vofeService.create(createVofeDto);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.vofeService.findAll();
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vofeService.findOne(+id);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVofeDto: UpdateVofeDto) {
    return this.vofeService.update(+id, updateVofeDto);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vofeService.remove(+id);
  }
}
