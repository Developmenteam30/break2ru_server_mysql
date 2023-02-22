import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/users/jwt-auth.guard';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Post()
  // create(@Body() createChatDto: CreateChatDto) {
  //   return this.chatsService.create(createChatDto);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Get()
  // findAll(@Req() user) {
  //   return this.chatsService.findAll(user.user.userId);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Get(':id')
  // findOne(@Param('id') id: number, @Req() user) {
  //   return this.chatsService.findOne(id, user.user.userId);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Post('/sendmsg')
  // sendmsg(@Body() data, @Req() user) {
  //   return this.chatsService.sendmsg(data.to, user.user.userId, data.post_id);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Patch(':id')
  // update(@Param('id') id: number, @Body() updateChatDto: UpdateChatDto) {
  //   return this.chatsService.update(id, updateChatDto);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Delete(':id')
  // remove(@Param('id') id: number) {
  //   return this.chatsService.remove(id);
  // }
}
