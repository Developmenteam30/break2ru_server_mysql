import { HourshineService } from './hourshine.service';
import { CreateHourshineDto } from './dto/create-hourshine.dto';
import { UpdateHourshineDto } from './dto/update-hourshine.dto';
export declare class HourshineController {
    private readonly hourshineService;
    constructor(hourshineService: HourshineService);
    create(createHourshineDto: CreateHourshineDto[]): Promise<any[]>;
    findAll(): Promise<import("./entities/hourshine.entity").Hourshine[]>;
    findOne(id: string): Promise<import("./entities/hourshine.entity").Hourshine>;
    update(id: string, updateHourshineDto: UpdateHourshineDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
