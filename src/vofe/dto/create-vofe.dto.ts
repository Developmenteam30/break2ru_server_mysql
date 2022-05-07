import { ApiProperty } from "@nestjs/swagger"
import { User } from "src/users/entities/user.entity";
export class CreateVofeDto {
    @ApiProperty()
    vote_id:number;
    @ApiProperty()
    userid:number;
    @ApiProperty()
    user:Promise<User>;
    @ApiProperty()
    image:string;
    @ApiProperty()
    Location:string;
    @ApiProperty()
    profession:string;
    @ApiProperty()
    date_time:Date;
    @ApiProperty()
    shows:string;
    @ApiProperty()
    timeStamp:Date;
}
