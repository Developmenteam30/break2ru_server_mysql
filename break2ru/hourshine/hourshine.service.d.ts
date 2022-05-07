import { Repository } from 'typeorm';
import { CreateHourshineDto } from './dto/create-hourshine.dto';
import { UpdateHourshineDto } from './dto/update-hourshine.dto';
import { Hourshine } from './entities/hourshine.entity';
export declare class HourshineService {
    private UserModel;
    constructor(UserModel: Repository<Hourshine>);
    create(createHourshineDto: CreateHourshineDto[]): Promise<any[]>;
    findAll(): Promise<Hourshine[]>;
    findOne(id: number): Promise<Hourshine>;
    update(id: number, updateHourshineDto: UpdateHourshineDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
