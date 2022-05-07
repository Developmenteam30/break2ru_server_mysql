import { ApiProperty } from '@nestjs/swagger';
export class CreateAdminDto {
    @ApiProperty()
    dates:string;
    @ApiProperty()
    user_name:string;
    @ApiProperty()
    email:string;
    @ApiProperty()
    image:string;
    @ApiProperty()
    password: string;

}
