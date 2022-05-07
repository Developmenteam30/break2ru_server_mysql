import { User } from './entities/user.entity';
import { UsersService } from './users.service';
export declare class UserResolver {
    private readonly service;
    constructor(service: UsersService);
    findAllUser(): Promise<User[]>;
    findOneUser(id: number): Promise<User>;
}
