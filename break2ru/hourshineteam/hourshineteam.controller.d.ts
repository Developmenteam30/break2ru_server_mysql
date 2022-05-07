import { HourshineteamService } from './hourshineteam.service';
import { CreateHourshineteamDto } from './dto/create-hourshineteam.dto';
import { UpdateHourshineteamDto } from './dto/update-hourshineteam.dto';
export declare class HourshineteamController {
    private readonly hourshineteamService;
    constructor(hourshineteamService: HourshineteamService);
    create(createHourshineteamDto: CreateHourshineteamDto): Promise<import("./entities/hourshineteam.entity").Hourshineteam>;
    findAll(): Promise<import("./entities/hourshineteam.entity").Hourshineteam[]>;
    findOne(id: number): Promise<import("./entities/hourshineteam.entity").Hourshineteam>;
    update(id: number, updateHourshineteamDto: UpdateHourshineteamDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
