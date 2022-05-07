import { ApiProperty } from "@nestjs/swagger"
import { User } from "src/users/entities/user.entity";
export class CreateLikeCommentDto {
    @ApiProperty()
    Ic_id:number;
    @ApiProperty()
    user_id:number;
    @ApiProperty()
    user:Promise<User>;
    @ApiProperty()
    comment_id:number;
    @ApiProperty()
    type:string;
    @ApiProperty()
    post_id:number;
    @ApiProperty()
    timestamp:Date;
}
