import { BlockService } from './block.service';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
export declare class BlockController {
    private readonly blockService;
    constructor(blockService: BlockService);
    create(createBlockDto: CreateBlockDto): Promise<import("./entities/block.entity").Block>;
    findAll(): Promise<import("./entities/block.entity").Block[]>;
    findOne(id: string): Promise<import("./entities/block.entity").Block>;
    update(id: string, updateBlockDto: UpdateBlockDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
