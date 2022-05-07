import { Repository } from 'typeorm';
import { CreateHashtagDto } from './dto/create-hashtag.dto';
import { UpdateHashtagDto } from './dto/update-hashtag.dto';
import { Hashtag } from './entities/hashtag.entity';
export declare class HashtagService {
    private UserModel;
    constructor(UserModel: Repository<Hashtag>);
    create(createHashtagDto: CreateHashtagDto): Promise<CreateHashtagDto & Hashtag>;
    findAll(): Promise<Hashtag[]>;
    findOne(id: number): Promise<Hashtag>;
    update(id: number, updateHashtagDto: UpdateHashtagDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
