import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserVotingService } from './user-voting.service';
import { CreateUserVotingDto } from './dto/create-user-voting.dto';
import { UpdateUserVotingDto } from './dto/update-user-voting.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../users/jwt-auth.guard';

@Controller('user-voting')
export class UserVotingController {
  constructor(private readonly userVotingService: UserVotingService) {}

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createUserVotingDto: CreateUserVotingDto) {
    return this.userVotingService.create(createUserVotingDto);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.userVotingService.findAll();
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userVotingService.findOne(+id);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserVotingDto: UpdateUserVotingDto) {
    return this.userVotingService.update(+id, updateUserVotingDto);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userVotingService.remove(+id);
  }
}
