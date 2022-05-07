import { ApiProperty } from '@nestjs/swagger';
export class CreateHashtagDto {
    @ApiProperty()
    hashtag:string;
}
