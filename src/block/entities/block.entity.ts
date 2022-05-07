import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Block {
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    block_id:number;

    @Field()
    @Column('int')
    user_id:number;

    @Field()
    @Column('int')
    data_id:number;

    @Field()
    @Column({length:100})
    type:String;

    @Field()
    @Column({length:200})
    content:String;

    @Field()
    @Column()
    timestamp:Date;
}
