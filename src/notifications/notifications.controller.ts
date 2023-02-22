import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/users/jwt-auth.guard';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Post()
  // create(@Body() createNotificationDto: CreateNotificationDto) {
  //   return this.notificationsService.create(createNotificationDto);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Get()
  // findAll() {
  //   return this.notificationsService.findAll();
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Get(':id')
  // findOne(@Param('id') id: number) {
  //   return this.notificationsService.findOne(id);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
  //   return this.notificationsService.update(+id, updateNotificationDto);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.notificationsService.remove(+id);
  // }
}
