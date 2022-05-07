import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';
import { Repository } from 'typeorm';
export declare class ImagesService {
    private UserModel;
    constructor(UserModel: Repository<Image>);
    create(createImageDto: CreateImageDto): Promise<Image>;
    findAll(): Promise<Image[]>;
    findOne(id: number): Promise<Image>;
    update(id: number, updateImageDto: UpdateImageDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
