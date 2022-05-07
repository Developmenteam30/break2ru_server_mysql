import { ApiProperty } from "@nestjs/swagger"
import { User } from "src/users/entities/user.entity";
import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { CreateUserDto } from "src/users/dto/create-user.dto";

@InputType()
export class CreatePostInfoDto {
    @Field(() => Int, { description: 'Primary key' })
    @ApiProperty()
    post_id:number;

    @Field(() => CreateUserDto)
    @ApiProperty()
    user:Promise<User>;

    @Field()
    @ApiProperty()
    user_id:number;

    @Field()
    @ApiProperty()
    share_id:number;

    @Field()
    @ApiProperty()
    share_user_name:String;

    @Field()
    @ApiProperty()
    post_type:String;

    @Field()
    @ApiProperty()
    text:String;

    @Field()
    @ApiProperty()
    hashtag:String;

    @Field()
    @ApiProperty()
    userstag:String;

    @Field()
    @ApiProperty()
    location:String;

    @Field()
    @ApiProperty()
    privacy:String;

    @Field()
    @ApiProperty()
    likes:number;

    @Field()
    @ApiProperty()
    comment:number;

    @Field()
    @ApiProperty()
    status:String;

    @Field()
    @ApiProperty()
    date_time:Date;

    @Field()
    @ApiProperty()
    time_stamp:Date;
}
