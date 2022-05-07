import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
export class CreateFollowerDto {
    @ApiProperty()
    follower_id:number;
    @ApiProperty()
    sender:number;
    @ApiProperty()
    user_sender:Promise<User>;
    @ApiProperty()
    receiver:number;
    @ApiProperty()
    user_receiver:Promise<User>;
    @ApiProperty()
    date_time:Date;
    @ApiProperty()
    status:number;
}

