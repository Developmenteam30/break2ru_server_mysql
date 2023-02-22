import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/users/jwt-auth.guard';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Post()
  // create(@Body() createImageDto: CreateImageDto) {
  //   return this.imagesService.create(createImageDto);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Get()
  // findAll() {
  //   return this.imagesService.findAll();
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Get(':id')
  // findOne(@Param('id') id: number) {
  //   return this.imagesService.findOne(+id);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Patch(':id')
  // update(@Param('id') id: number, @Body() updateImageDto: UpdateImageDto) {
  //   return this.imagesService.update(+id, updateImageDto);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Delete(':id')
  // remove(@Param('id') id: number) {
  //   return this.imagesService.remove(+id);
  // }
}
