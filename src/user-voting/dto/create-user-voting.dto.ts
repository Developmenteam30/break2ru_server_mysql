import { ApiProperty } from "@nestjs/swagger"
export class CreateUserVotingDto {
    @ApiProperty()
    voting_id:number;
    @ApiProperty()
    vote_id:number;
    @ApiProperty()
    contest:string;
    @ApiProperty()
    user_id:number;
    @ApiProperty()
    user_by:number;
    @ApiProperty()
    thumb_type:string;
    @ApiProperty()
    comment:string;
    @ApiProperty()
    time_stamp:Date;
}
