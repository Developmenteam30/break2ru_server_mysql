import { ViewsService } from './views.service';
import { CreateViewDto } from './dto/create-view.dto';
import { UpdateViewDto } from './dto/update-view.dto';
export declare class ViewsController {
    private readonly viewsService;
    constructor(viewsService: ViewsService);
    create(createViewDto: CreateViewDto): Promise<import("./entities/view.entity").View>;
    findAll(): Promise<import("./entities/view.entity").View[]>;
    findOne(id: string, type: string): Promise<import("./entities/view.entity").View[]>;
    update(id: string, updateViewDto: UpdateViewDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
