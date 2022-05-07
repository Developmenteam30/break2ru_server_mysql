import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { Password } from './entities/password.entity';
export declare class UsersService {
    private readonly mailerService;
    private UserModel;
    private PasswordModel;
    private readonly jwtService;
    constructor(mailerService: MailerService, UserModel: Repository<User>, PasswordModel: Repository<Password>, jwtService: JwtService);
    create(createUserDto: CreateUserDto, password: any): Promise<any>;
    findAll(): Promise<User[]>;
    searchAll(name: string): Promise<User[]>;
    phonelogin(email: string): Promise<{
        expires_in: number;
        access_token: string;
        user_id: number;
        user: User;
        status: Boolean;
        error?: undefined;
    } | {
        status: number;
        error: string;
        expires_in?: undefined;
        access_token?: undefined;
        user_id?: undefined;
        user?: undefined;
    }>;
    findByEmail(email: string, password: string): Promise<{
        expires_in: number;
        access_token: string;
        user_id: number;
        user: User;
        status: Boolean;
        error?: undefined;
    } | {
        status: number;
        error: string;
        expires_in?: undefined;
        access_token?: undefined;
        user_id?: undefined;
        user?: undefined;
    }>;
    findOne(id: number): Promise<User>;
    findonlyOne(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    updatepassword(id: number, oldpassword: string, newpassword: string, uid: number): Promise<import("typeorm").UpdateResult | {
        status: number;
        error: string;
    }>;
    verifyotp(email: string, otp: string): Promise<{
        status: number;
        msg: string;
    }>;
    changepassword(email: string, password: string): Promise<import("typeorm").UpdateResult>;
    forgotpassword(email: string): Promise<{
        status: number;
        msg: string;
        test: any;
    } | {
        status: number;
        msg: string;
        test?: undefined;
    }>;
}
