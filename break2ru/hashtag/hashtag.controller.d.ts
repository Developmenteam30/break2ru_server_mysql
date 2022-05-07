import { HashtagService } from './hashtag.service';
import { CreateHashtagDto } from './dto/create-hashtag.dto';
import { UpdateHashtagDto } from './dto/update-hashtag.dto';
export declare class HashtagController {
    private readonly hashtagService;
    constructor(hashtagService: HashtagService);
    create(createHashtagDto: CreateHashtagDto): Promise<CreateHashtagDto & import("./entities/hashtag.entity").Hashtag>;
    findAll(): Promise<import("./entities/hashtag.entity").Hashtag[]>;
    findOne(id: string): Promise<import("./entities/hashtag.entity").Hashtag>;
    update(id: string, updateHashtagDto: UpdateHashtagDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
