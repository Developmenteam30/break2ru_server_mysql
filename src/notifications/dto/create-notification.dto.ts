import { ApiProperty } from "@nestjs/swagger"
import { User } from "src/users/entities/user.entity";
export class CreateNotificationDto {
    @ApiProperty()
    notification_id:number;
    @ApiProperty()
    type:string;
    @ApiProperty()
    sender_id:number;
    @ApiProperty()
    user_sender:Promise<User>;
    @ApiProperty()
    user_receiver:Promise<User>;

    @ApiProperty()
    receiver_id:number;
    @ApiProperty()
    post_id:number;
    @ApiProperty()
    image:string;
    @ApiProperty()
    description:string;
    @ApiProperty()
    url:string;
    @ApiProperty()
    date_time:Date;
    @ApiProperty()
    seen:number;
}
