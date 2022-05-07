import { User } from 'src/users/entities/user.entity';
import { type } from '../entities/view.entity';
export declare class CreateViewDto {
    view_id: number;
    data_id: number;
    user_id: number;
    user: Promise<User>;
    type: type;
}
