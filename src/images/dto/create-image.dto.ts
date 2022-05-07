import { ApiProperty } from "@nestjs/swagger";
import { PostInfo } from "src/post-info/entities/post-info.entity";
export class CreateImageDto {
    @ApiProperty()
    img_id:number;
    @ApiProperty()
    user_id:number;
    @ApiProperty()
    post_id:number;
    @ApiProperty()
    post:Promise<PostInfo>;
    @ApiProperty()
    type:string;
    @ApiProperty()
    img_url:string;
    @ApiProperty()
    timestamp:Date;
    @ApiProperty()
    thumbnail:string;
}
