"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const mailer_1 = require("@nestjs-modules/mailer");
const password_entity_1 = require("./entities/password.entity");
const bcrypt = require('bcryptjs');
let UsersService = class UsersService {
    constructor(mailerService, UserModel, PasswordModel, jwtService) {
        this.mailerService = mailerService;
        this.UserModel = UserModel;
        this.PasswordModel = PasswordModel;
        this.jwtService = jwtService;
    }
    async create(createUserDto, password) {
        const saltOrRounds = 10;
        createUserDto.user_email = createUserDto.user_email.toLowerCase();
        password = await bcrypt.hash(password, saltOrRounds);
        var i = await this.UserModel.save(createUserDto);
        var createPassword = { user_id: i.user_id, password: password };
        var p = await this.PasswordModel.save(createPassword);
        const accessToken = this.jwtService.sign(i.user_id.toString());
        return {
            expires_in: 3600,
            access_token: accessToken,
            user_id: i.user_id,
            user: i,
            status: 200
        };
    }
    async findAll() {
        return await this.UserModel.find();
    }
    async searchAll(name) {
        return await this.UserModel.find({
            user_name: (0, typeorm_1.Like)(`%${name}%`)
        });
    }
    async phonelogin(email) {
        var i = await this.UserModel.findOne({
            mob_no: email,
        });
        if (i) {
            const accessToken = this.jwtService.sign({ userId: i.user_id });
            return {
                expires_in: 3600,
                access_token: accessToken,
                user_id: i.user_id,
                user: i,
                status: i.status
            };
        }
        else {
            return { status: 0, error: 'User not found please register' };
        }
    }
    async findByEmail(email, password) {
        var i = await this.UserModel.findOne({
            user_email: email.toLowerCase(),
        });
        if (i && password) {
            var p = await this.PasswordModel.findOne({
                user_id: i.user_id,
            });
            var hash = String(p.password);
            const isMatch = await bcrypt.compare(password, hash);
            if (isMatch) {
                const accessToken = this.jwtService.sign({ userId: i.user_id });
                return {
                    expires_in: 3600,
                    access_token: accessToken,
                    user_id: i.user_id,
                    user: i,
                    status: i.status
                };
            }
            else {
                return { status: 0, error: 'Email or password is wrong' };
            }
        }
        else {
            return { status: 0, error: 'User not found' };
        }
    }
    async findOne(id) {
        return await this.UserModel.findOne(id, {
            relations: ['posts']
        });
    }
    async findonlyOne(id) {
        return await this.UserModel.findOne(id);
    }
    async update(id, updateUserDto) {
        await this.UserModel.update(id, updateUserDto);
        return await this.UserModel.findOne({
            user_id: id,
        });
    }
    async remove(id) {
        return await this.UserModel.delete(id);
    }
    async updatepassword(id, oldpassword, newpassword, uid) {
        var user = await this.PasswordModel.findOne({
            user_id: uid,
        });
        var hash = String(user.password);
        const isMatch = await bcrypt.compare(oldpassword, hash);
        if (isMatch) {
            const saltOrRounds = 10;
            user.password = await bcrypt.hash(newpassword, saltOrRounds);
            return await this.UserModel.update(user.password_id, user);
        }
        else {
            return { "status": 0, "error": "Not authorized for this data" };
        }
    }
    async verifyotp(email, otp) {
        var i = await this.UserModel.findOne({
            user_email: email.toLowerCase(),
        });
        var p = await this.PasswordModel.findOne({
            user_id: i.user_id,
        });
        if (i && otp && p) {
            var hash = String(p.otp);
            const isMatch = await bcrypt.compare(email + otp, hash);
            if (isMatch) {
                return { 'status': 1, 'msg': 'Change password' };
            }
            else {
                return { 'status': 0, 'msg': 'wrong otp' };
            }
        }
        else {
            return { 'status': 0, 'msg': 'wrong email' };
        }
    }
    async changepassword(email, password) {
        var i = await this.UserModel.findOne({
            user_email: email.toLowerCase(),
        });
        var p = await this.PasswordModel.findOne({
            user_id: i.user_id,
        });
        if (i && password) {
            const saltOrRounds = 10;
            p.password = await bcrypt.hash(password, saltOrRounds);
            return await this.PasswordModel.update(p.password_id, p);
        }
    }
    async forgotpassword(email) {
        var i = await this.UserModel.findOne({
            user_email: email.toLowerCase(),
        });
        if (i) {
            try {
                var p = await this.PasswordModel.findOne({
                    user_id: i.user_id,
                });
                var otp = Math.floor(Math.random() * 10100) + 1000;
                const saltOrRounds = 10;
                p.otp = await bcrypt.hash(email + otp.toString(), saltOrRounds);
                await this.PasswordModel.update(p.password_id, p);
                var emailsend = await this.mailerService
                    .sendMail({
                    to: email,
                    from: 'info@curveinfotech.com',
                    subject: 'Updrive One Time Password ✔',
                    text: 'OTP to reset your Updrive account is: ' + otp.toString(),
                    html: '<b>OTP to reset your Updrive account is: ' + otp.toString() + '</b>',
                });
                if (emailsend) {
                    return { 'status': 1, 'msg': 'Email has been sent', 'test': emailsend };
                }
                else {
                    return { 'status': 1, 'msg': 'Email has been sent' };
                }
            }
            catch (E) {
                return { 'status': 0, 'msg': 'Email not sent' + E };
            }
        }
        else {
            return { 'status': 0, 'msg': 'wrong email' };
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_2.InjectRepository)(password_entity_1.Password)),
    __metadata("design:paramtypes", [mailer_1.MailerService, typeorm_1.Repository, typeorm_1.Repository, jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map