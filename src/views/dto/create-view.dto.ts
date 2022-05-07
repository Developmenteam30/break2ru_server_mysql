import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { type } from '../entities/view.entity';
export class CreateViewDto {
    @ApiProperty()
    view_id:number;

    @ApiProperty()
    data_id:number;

    @ApiProperty()
    user_id:number;

    @ApiProperty()
    user:Promise<User>;

    @ApiProperty()
    type:type;
}
