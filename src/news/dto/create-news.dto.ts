import { ApiProperty } from "@nestjs/swagger"
export class CreateNewsDto {
    @ApiProperty()
    news_id:number;
    @ApiProperty()
    news_image:string;
    @ApiProperty()
    news_video:string;
    @ApiProperty()
    type:string;
    @ApiProperty()
    title:string;
    @ApiProperty()
    description:string;
    @ApiProperty()
    timeStamp:Date;
}
