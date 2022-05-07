import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(createAdminDto: CreateAdminDto): Promise<CreateAdminDto & import("./entities/admin.entity").Admin>;
    findAll(): Promise<import("./entities/admin.entity").Admin[]>;
    findOne(id: string): Promise<import("./entities/admin.entity").Admin>;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
