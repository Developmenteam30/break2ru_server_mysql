import { Repository } from 'typeorm';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';
export declare class NewsService {
    private UserModel;
    constructor(UserModel: Repository<News>);
    create(createNewsDto: CreateNewsDto): Promise<CreateNewsDto & News>;
    findAll(): Promise<News[]>;
    findOne(id: number): Promise<News>;
    update(id: number, updateNewsDto: UpdateNewsDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
