import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FollowerService } from './follower.service';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { JwtAuthGuard } from 'src/users/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('follower')
export class FollowerController {
  constructor(private readonly followerService: FollowerService) {}

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createFollowerDto: CreateFollowerDto) {
    return this.followerService.create(createFollowerDto);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Post('follow')
  follow(@Body() createFollowerDto: CreateFollowerDto) {
    return this.followerService.follow(createFollowerDto);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.followerService.findAll();
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get('followers/:id')
  findOne(@Param('id') id: number) {
    return this.followerService.findOne(id);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get('followings/:id')
  findFollowing(@Param('id') id: number) {
    return this.followerService.findFollowings(id);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateFollowerDto: UpdateFollowerDto) {
    return this.followerService.update(id, updateFollowerDto);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.followerService.remove(id);
  }
}
