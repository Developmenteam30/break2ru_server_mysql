import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
export declare class ImagesController {
    private readonly imagesService;
    constructor(imagesService: ImagesService);
    create(createImageDto: CreateImageDto): Promise<import("./entities/image.entity").Image>;
    findAll(): Promise<import("./entities/image.entity").Image[]>;
    findOne(id: number): Promise<import("./entities/image.entity").Image>;
    update(id: number, updateImageDto: UpdateImageDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
