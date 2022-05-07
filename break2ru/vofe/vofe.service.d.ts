import { Repository } from 'typeorm';
import { CreateVofeDto } from './dto/create-vofe.dto';
import { UpdateVofeDto } from './dto/update-vofe.dto';
import { Vofe } from './entities/Vofe.entity';
export declare class VofeService {
    private UserModel;
    constructor(UserModel: Repository<Vofe>);
    create(createVofeDto: CreateVofeDto[]): any[];
    findAll(): Promise<Vofe[]>;
    findOne(id: number): Promise<Vofe>;
    update(id: number, updateVofeDto: UpdateVofeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
