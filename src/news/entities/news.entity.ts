import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class News {
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    news_id:number;

    @Field()
    @Column('text')
    news_image:String;

    @Field()
    @Column('text')
    news_video:String;

    @Field()
    @Column({length:100})
    type:String;

    @Field()
    @Column({length:100})
    title:String;

    @Field()
    @Column({type: 'text', nullable: true})
    description:String;

    @Field()
    @Column()
    timeStamp:Date;
}
