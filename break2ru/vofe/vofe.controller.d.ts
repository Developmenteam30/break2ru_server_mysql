import { VofeService } from './vofe.service';
import { CreateVofeDto } from './dto/create-vofe.dto';
import { UpdateVofeDto } from './dto/update-vofe.dto';
export declare class VofeController {
    private readonly vofeService;
    constructor(vofeService: VofeService);
    create(createVofeDto: CreateVofeDto[]): any[];
    findAll(): Promise<import("./entities/Vofe.entity").Vofe[]>;
    findOne(id: string): Promise<import("./entities/Vofe.entity").Vofe>;
    update(id: string, updateVofeDto: UpdateVofeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
