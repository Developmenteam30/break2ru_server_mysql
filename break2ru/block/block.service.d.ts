import { Repository } from 'typeorm';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { Block } from './entities/block.entity';
export declare class BlockService {
    private UserModel;
    constructor(UserModel: Repository<Block>);
    create(createBlockDto: CreateBlockDto): Promise<Block>;
    findAll(): Promise<Block[]>;
    findOne(id: number): Promise<Block>;
    update(id: number, updateBlockDto: UpdateBlockDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
