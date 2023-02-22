import { Controller, Get, Post, Body, Patch, Request, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto, @Body() create) {
  //   return this.usersService.create(createUserDto, create.password);
  // }

  // @Post('/checkuser')
  // checkusers(@Body() req) {
  //   return this.usersService.checkuser(req.user_name, req.user_email, req.mob_no);
  // }

  // @Post('/login')
  // login(@Body() req) {
  //   return this.usersService.findByEmail(req.email, req.password);
  // }
  
  // @Post('/phonelogin')
  // phonelogin(@Body() req) {
  //   return this.usersService.phonelogin(req.phone);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }


  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Get('search/:id')
  // finduser(@Param('id') id: string) {
  //   return this.usersService.searchAll(id);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Get(':id')
  // findOne(@Param('id') id: number) {
  //   return this.usersService.findOne(id);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Patch(':id')
  // update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(id, updateUserDto);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Delete()
  // remove(@Req() user) {
  //   return this.usersService.remove(user.user.userId);
  // }

  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  // @Patch('/changepassword/:id')
  // changepassword(@Param('id') id: number, @Body() passworddata, @Req() user) {
  //   return this.usersService.updatepassword(id, passworddata.oldpassword, passworddata.newpassword, user.user.userId.userId);
  // }
  
  // @Post('/forgotpassword')
  // forgotpassword(@Body() req) {
  //   return this.usersService.forgotpassword(req.email);
  // }
  // @Post('/verify')
  // verify(@Body() req) {
  //   return this.usersService.verifyotp(req.email, req.otp);
  // }
  // @Post('/changepassword')
  // changepass(@Body() req) {
  //   return this.usersService.changepassword(req.email, req.password);
  // }


}
