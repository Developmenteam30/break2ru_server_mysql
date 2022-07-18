import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreatePasswordDto } from './dto/create-password.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { User } from './entities/user.entity';
import { JwtService } from  '@nestjs/jwt';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { Password } from './entities/password.entity';
const bcrypt = require('bcryptjs');

@Injectable()
export class UsersService {
  constructor(private readonly mailerService: MailerService, @InjectRepository(User) private UserModel : Repository<User>, @InjectRepository(Password) private PasswordModel : Repository<Password>, private readonly jwtService: JwtService) {}

  async create(createUserDto: CreateUserDto, password) : Promise<any> {
    const saltOrRounds = 10;
    createUserDto.user_email = createUserDto.user_email.toLowerCase();
    var is = await this.UserModel.createQueryBuilder('users')
    .where("(user_email = :tos OR user_name = :iis OR mob_no = :mob)", {tos: createUserDto.user_email, iis: createUserDto.user_name, mob:createUserDto.mob_no})
    .getOne();
    if(!is){
      password = await bcrypt.hash(password, saltOrRounds);
      var i = await this.UserModel.save(createUserDto);
      var createPassword = {user_id: i.user_id, password: password}
      var p = await this.PasswordModel.save(createPassword);
      const accessToken = this.jwtService.sign(i.user_id.toString());
      return {
         expires_in: 3600,
         access_token: accessToken,
         user_id: i.user_id,
         user: i,
         status: 200
      };
    }else{
      return {
        error: "User already registered!",
     };
   }
  }

  async checkuser(user_name: string, user_email: string, mob_no: string) : Promise<any> {
    user_email = user_email.toLowerCase();
    var is = await this.UserModel.createQueryBuilder('users')
    .where("(user_email = :tos OR user_name = :iis OR mob_no = :mob)", {tos: user_email, iis: user_name, mob:mob_no})
    .getOne();
    if(!is){
      return {
         status: 200,
         user_email: user_email,
         user_name: user_name,
         mob_no: mob_no
      };
    }else{
      return {
        status: 400,
        error: "User already registered!",
     };
   }
  }

  async findAll() {
    return await this.UserModel.find();
  }

  async searchAll(name: string) {
    return await this.UserModel.find({where: {
      user_name: Like(`%${name}%`)
    }});
  }

  
  async phonelogin(email: string) {
    var i = await this.UserModel.createQueryBuilder('users')
    .where("(mob_no = :tos)", {tos: email})
    .getOne();
    if(i){
      const accessToken = this.jwtService.sign({userId :i.user_id});
      return {
          expires_in: 3600,
          access_token: accessToken,
          user_id: i.user_id,
          user: i,
          status: i.status
      };
    }else{
      return {status: 0, error: 'User not found please register'};
    }
  }

  async findByEmail(email: string, password: string) {
    var i = await this.UserModel.createQueryBuilder('users')
    .where("(user_email = :tos)", {tos: email})
    .getOne();
    if(i && password){
      var p = await this.PasswordModel.findOne({where: {
        user_id: i.user_id,
      }});
      var hash = String(p.password);
      const isMatch = await bcrypt.compare(password, hash);
      if(isMatch){
        const accessToken = this.jwtService.sign({userId :i.user_id});
        return {
           expires_in: 3600,
           access_token: accessToken,
           user_id: i.user_id,
           user: i,
           status: i.status
        };
      }else{
        return {status: 0, error: 'Email or password is wrong'};
      }
    }else{
      return {status: 0, error: 'User not found'};
    }
  }

  async findOne(id: number) {
    return await this.UserModel.findOne({
      where: {user_id: id},
      relations: ['posts']
    });
  }

  async findonlyOne(id: number) {
    return await this.UserModel.findOne({where: {user_id:id}});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.UserModel.update(id, updateUserDto);
    return await this.UserModel.findOne({where:{
      user_id: id,
    }});

  }

  async remove(id: number) {
    return await this.UserModel.delete(id);
  }

  async updatepassword(id: number, oldpassword: string, newpassword: string, uid: number) {
    var user = await this.PasswordModel.findOne({where: {
      user_id: uid,
    }});
    var hash = String(user.password);
    const isMatch = await bcrypt.compare(oldpassword, hash);
    if(isMatch){
      const saltOrRounds = 10;
      user.password = await bcrypt.hash(newpassword, saltOrRounds);
      return await this.UserModel.update(user.password_id, user);
    }else{
      return {"status": 0,"error": "Not authorized for this data"};
    }
  }
  async verifyotp(email: string, otp: string){
    var i = await this.UserModel.createQueryBuilder('users')
    .where("(user_email = :tos)", {tos: email.toLowerCase()})
    .getOne();
    var p = await this.PasswordModel.findOne({where: {
      user_id: i.user_id,
    }});
    if(i && otp && p){
      var hash = String(p.otp);
      const isMatch = await bcrypt.compare(email+otp, hash);
      if(isMatch){
        return {'status': 1,'msg': 'Change password'};
      }else{
        return {'status': 0,'msg': 'wrong otp'};
      }
    }else{
      return {'status': 0,'msg': 'wrong email'};
    }
  }
  async changepassword(email: string, password: string){
    var i = await this.UserModel.createQueryBuilder('users')
    .where("(user_email = :tos)", {tos: email.toLowerCase()})
    .getOne();
    var p = await this.PasswordModel.findOne({where: {
      user_id: i.user_id,
    }});
    if(i && password){
      const saltOrRounds = 10;
      p.password = await bcrypt.hash(password, saltOrRounds);
      return await this.PasswordModel.update(p.password_id, p);
    }
  }
  async forgotpassword(email: string){
    var i = await this.UserModel.createQueryBuilder('users')
    .where("(user_email = :tos)", {tos: email.toLowerCase()})
    .getOne();
    if(i){
      try{
        var p = await this.PasswordModel.findOne({where: {
          user_id: i.user_id,
        }});
        var otp = Math.floor(Math.random() * 10100)+1000;
        const saltOrRounds = 10;
        p.otp = await bcrypt.hash(email+otp.toString(), saltOrRounds);
        await this.PasswordModel.update(p.password_id, p);
        var emailsend = await this.mailerService
        .sendMail({
          to: email,
          from: 'info@curveinfotech.com',
          subject: 'Updrive One Time Password ✔',
          text: 'OTP to reset your Updrive account is: '+otp.toString(), // plaintext body
          html: '<b>OTP to reset your Updrive account is: '+otp.toString()+'</b>', // HTML body content
        })
        if(emailsend){
          return {'status': 1,'msg': 'Email has been sent', 'test': emailsend};
        }else{
          return {'status': 1,'msg': 'Email has been sent'};
        }
      }catch(E){
        return {'status': 0,'msg': 'Email not sent'+E};
      }
    }else{
      return {'status': 0,'msg': 'wrong email'};
    }
  }
}
