import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
export declare class AdminService {
    private UserModel;
    constructor(UserModel: Repository<Admin>);
    create(createAdminDto: CreateAdminDto): Promise<CreateAdminDto & Admin>;
    findAll(): Promise<Admin[]>;
    findOne(id: number): Promise<Admin>;
    update(id: number, updateAdminDto: UpdateAdminDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
