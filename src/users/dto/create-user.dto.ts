import { ApiProperty } from '@nestjs/swagger';
import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { PostInfo } from 'src/post-info/entities/post-info.entity';
import { CreatePostInfoDto } from 'src/post-info/dto/create-post-info.dto';

@InputType()
export class CreateUserDto {
    @Field(() => Int, { description: 'Primary key' })
    @ApiProperty()
    user_id:number;
    @Field()
    @ApiProperty()
    first_name:string;
    @Field()
    @ApiProperty()
    last_name:string;
    @Field()
    @ApiProperty()
    user_name:string;
    @Field()
    @ApiProperty()
    user_email:string;
    @Field()
    @ApiProperty()
    mob_no:string;
    // @Field()
    // @ApiProperty()
    // password: string;
    @Field()
    @ApiProperty()
    dob: string;
    @Field()
    @ApiProperty()
    gender: string;
    @Field()
    @ApiProperty()
    bio: string;
    @Field()
    @ApiProperty()
    address: string;
    @Field()
    @ApiProperty()
    city: string;
    @Field()
    @ApiProperty()
    state: string;
    @Field()
    @ApiProperty()
    country: string;
    @Field()
    @ApiProperty()
    image: string;
    @Field()
    @ApiProperty()
    thumb_img: string;
    @Field()
    @ApiProperty()
    cover_photo: string;
    @Field()
    @ApiProperty()
    url: string;
    @Field()
    @ApiProperty()
    date_time: string;
    @Field()
    @ApiProperty()
    token_android: string;
    @Field()
    @ApiProperty()
    token_ios: string;
    @Field()
    @ApiProperty()
    followerCount: string;
    @Field()
    @ApiProperty()
    followingCount: string;
    @Field()
    @ApiProperty()
    status: Boolean;

    @Field(() => CreatePostInfoDto)
    @ApiProperty()
    posts:Promise<PostInfo>;
}
