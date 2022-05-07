import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Admin {
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ length: 20 })
    dates:String

    @Field(() => Int)
    @Column({ length: 100 })
    user_name:String

    @Field(() => Int)
    @Column({ length: 100 })
    email:String

    @Field(() => Int)
    @Column({ length: 100 })
    image:String

    @Field(() => Int)
    @Column({ length: 100 })
    password: String
}

