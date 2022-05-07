import { CreateHourshineteamDto } from './dto/create-hourshineteam.dto';
import { UpdateHourshineteamDto } from './dto/update-hourshineteam.dto';
import { Hourshineteam } from './entities/hourshineteam.entity';
import { Repository } from 'typeorm';
export declare class HourshineteamService {
    private UserModel;
    constructor(UserModel: Repository<Hourshineteam>);
    create(createHourshineteamDto: CreateHourshineteamDto): Promise<Hourshineteam>;
    findAll(): Promise<Hourshineteam[]>;
    findOne(id: number): Promise<Hourshineteam>;
    update(id: number, updateHourshineteamDto: UpdateHourshineteamDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
