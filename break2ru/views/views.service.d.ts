import { CreateViewDto } from './dto/create-view.dto';
import { UpdateViewDto } from './dto/update-view.dto';
import { Repository } from 'typeorm';
import { View } from './entities/view.entity';
export declare class ViewsService {
    private UserModel;
    constructor(UserModel: Repository<View>);
    create(createViewDto: CreateViewDto): Promise<View>;
    findAll(): Promise<View[]>;
    findOne(id: number, type: string): Promise<View[]>;
    update(id: number, updateViewDto: UpdateViewDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
