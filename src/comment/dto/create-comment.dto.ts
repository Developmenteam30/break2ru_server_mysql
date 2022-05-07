import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { Comment } from '../entities/comment.entity';
export class CreateCommentDto {
    @ApiProperty()
    comment_id:number;
    @ApiProperty()
    post_id:number;
    @ApiProperty()
    user_id:number;
    @ApiProperty()
    user:Promise<User>;
    @ApiProperty()
    text:string;
    @ApiProperty()
    email:string;
    @ApiProperty()
    date_time:Date;
    @ApiProperty()
    likes:number;
    @ApiProperty()
    other_comment_id:number;
    @ApiProperty()
    other_comment:Promise<Comment>;
}


