import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
export class CreateChatDto {
    @ApiProperty()
    chat_id:number;

    @ApiProperty()
    froms:number;

    @ApiProperty()
    from_user:Promise<User>;

    @ApiProperty()
    tos:number;

    @ApiProperty()
    to_user:Promise<User>;

    @ApiProperty()
    members:number;

    @ApiProperty()
    type:number;
}
