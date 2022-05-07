import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/entities/user.entity";
export class CreateHourshineteamDto {
    @ApiProperty()
    shine_id:number;
    @ApiProperty()
    user_id:number;
    @ApiProperty()
    user:Promise<User>;
    @ApiProperty()
    share_id:number;
    @ApiProperty()
    type:string;
    @ApiProperty()
    content:string;
    @ApiProperty()
    url:string;
    @ApiProperty()
    thumbnail:string;
    @ApiProperty()
    views:number;
    @ApiProperty()
    date_time:Date;
    @ApiProperty()
    time_Stamp:Date;
}
