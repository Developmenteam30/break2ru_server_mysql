import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HashtagService } from './hashtag.service';
import { CreateHashtagDto } from './dto/create-hashtag.dto';
import { UpdateHashtagDto } from './dto/update-hashtag.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/users/jwt-auth.guard';

@Controller('hashtag')
export class HashtagController {
  constructor(private readonly hashtagService: HashtagService) {}

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Post()
  // create(@Body() createHashtagDto: CreateHashtagDto) {
  //   return this.hashtagService.create(createHashtagDto);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Get()
  // findAll() {
  //   return this.hashtagService.findAll();
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.hashtagService.findOne(+id);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateHashtagDto: UpdateHashtagDto) {
  //   return this.hashtagService.update(+id, updateHashtagDto);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.hashtagService.remove(+id);
  // }
}
