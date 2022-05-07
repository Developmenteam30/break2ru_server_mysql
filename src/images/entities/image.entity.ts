import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PostInfo } from 'src/post-info/entities/post-info.entity';

@ObjectType()
@Entity()
export class Image {
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    img_id: number;

    @Field()
    @Column('int')
    user_id:number;

    @Field()
    @Column('int')
    post_id:number;

    @Field(() => PostInfo)
    @ManyToOne(() => PostInfo, {
        onDelete: "CASCADE",
    })
    @JoinColumn()
    post:Promise<PostInfo>;

    @Field()
    @Column({length: 50})
    type:String;

    @Field()
    @Column('text')
    img_url:String;

    @Field()
    @Column()
    timestamp:Date;

    @Field()
    @Column('text')
    thumbnail:String;

    @Field()
    @Column('int')
    views:number;


}

