import { ApiProperty } from "@nestjs/swagger"
import { User } from "src/users/entities/user.entity";
export class CreateLikeDto {
    @ApiProperty()
    like_id:number;
    @ApiProperty()
    user_id:number;
    @ApiProperty()
    user:Promise<User>;
    @ApiProperty()
    post_id:number;
    @ApiProperty()
    type:string;
    @ApiProperty()
    time_Stamp:Date;
}
