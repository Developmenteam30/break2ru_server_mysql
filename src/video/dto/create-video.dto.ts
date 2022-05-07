import { ApiProperty } from "@nestjs/swagger"
import { PostInfo } from "src/post-info/entities/post-info.entity";
export class CreateVideoDto {
    @ApiProperty()
    v_id:number;
    @ApiProperty()
    user_id:number;
    @ApiProperty()
    post_id:number;
    @ApiProperty()
    post:Promise<PostInfo>;
    @ApiProperty()
    type:string;
    @ApiProperty()
    video_url:string;
    @ApiProperty()
    timestamp:Date;
    @ApiProperty()
    views:number;
    @ApiProperty()
    viewer_user:string;
    @ApiProperty()
    vid:number;
    @ApiProperty()
    thumbnail:string;
}
