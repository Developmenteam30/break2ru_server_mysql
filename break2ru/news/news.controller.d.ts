import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    create(createNewsDto: CreateNewsDto): Promise<CreateNewsDto & import("./entities/news.entity").News>;
    findAll(): Promise<import("./entities/news.entity").News[]>;
    findOne(id: string): Promise<import("./entities/news.entity").News>;
    update(id: string, updateNewsDto: UpdateNewsDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
