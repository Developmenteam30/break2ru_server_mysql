import { ApiProperty } from '@nestjs/swagger';
export class CreateBlockDto {
    @ApiProperty()
    block_id:number;
    @ApiProperty()
    user_id:number;
    @ApiProperty()
    data_id:number;
    @ApiProperty()
    type:string;
    @ApiProperty()
    content:string;
    @ApiProperty()
    timestamp:Date;

}

