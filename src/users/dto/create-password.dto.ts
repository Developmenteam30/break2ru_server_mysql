import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreatePasswordDto {
    @Field(() => Int, { description: 'Primary key' })
    password_id:number;
    @Field()
    user_id:number;
    @Field()
    password:string;
    @Field()
    otp:string;
}
