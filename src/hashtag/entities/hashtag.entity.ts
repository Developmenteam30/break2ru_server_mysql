import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Hashtag {
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    h_id: number;

    @Field()
    @Column({length:100})
    hashtag:String;
}
