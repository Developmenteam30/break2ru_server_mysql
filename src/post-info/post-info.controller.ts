import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PostInfoService } from './post-info.service';
import { CreatePostInfoDto } from './dto/create-post-info.dto';
import { UpdatePostInfoDto } from './dto/update-post-info.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../users/jwt-auth.guard';

@Controller('post-info')
export class PostInfoController {
  constructor(private readonly postInfoService: PostInfoService) {}

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPostInfoDto: CreatePostInfoDto) {
    return this.postInfoService.create(createPostInfoDto);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Param('take') take: number, @Param('skip') skip: number) {
    var query = { 'take': take, 'skip': skip};
    return this.postInfoService.findAll(query);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.postInfoService.findOne(id);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get('user/:id')
  findU(@Param('id') id: number) {
    return this.postInfoService.findUser(id);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get('tags/:id')
  findt(@Param('id') id: string) {
    return this.postInfoService.findTags(id);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePostInfoDto: UpdatePostInfoDto) {
    return this.postInfoService.update(id, updatePostInfoDto);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.postInfoService.remove(id);
  }
}
