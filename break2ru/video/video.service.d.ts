import { Repository } from 'typeorm';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { Video } from './entities/video.entity';
export declare class VideoService {
    private UserModel;
    constructor(UserModel: Repository<Video>);
    create(createVideoDto: CreateVideoDto): Promise<Video>;
    findAll(): Promise<Video[]>;
    findOne(id: number): Promise<Video>;
    update(id: number, updateVideoDto: UpdateVideoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
