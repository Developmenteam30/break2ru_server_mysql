import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class UserVoting {
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    voting_id:number;

    @Field()
    @Column('int')
    user_id:number;

    @Field()
    @Column('int')
    vote_id:number;

    @Field()
    @Column({length: 30})
    contest:String;

    @Field()
    @Column('int')
    user_by:number;

    @Field()
    @Column({length: 30})
    thumb_type:String;

    @Field()
    @Column({length: 100})
    comment:String;

    @Field()
    @Column()
    time_Stamp:Date;
}

