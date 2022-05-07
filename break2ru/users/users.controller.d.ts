import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto, create: any): Promise<any>;
    login(req: any): Promise<{
        expires_in: number;
        access_token: string;
        user_id: number;
        user: import("./entities/user.entity").User;
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
    phonelogin(req: any): Promise<{
        expires_in: number;
        access_token: string;
        user_id: number;
        user: import("./entities/user.entity").User;
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
    findAll(): Promise<import("./entities/user.entity").User[]>;
    finduser(id: string): Promise<import("./entities/user.entity").User[]>;
    findOne(id: number): Promise<import("./entities/user.entity").User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").User>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    changepassword(id: number, passworddata: any, user: any): Promise<import("typeorm").UpdateResult | {
        status: number;
        error: string;
    }>;
    forgotpassword(req: any): Promise<{
        status: number;
        msg: string;
        test: any;
    } | {
        status: number;
        msg: string;
        test?: undefined;
    }>;
    verify(req: any): Promise<{
        status: number;
        msg: string;
    }>;
    changepass(req: any): Promise<import("typeorm").UpdateResult>;
}
