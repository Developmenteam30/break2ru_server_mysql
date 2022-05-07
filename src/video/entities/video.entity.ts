import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PostInfo } from 'src/post-info/entities/post-info.entity';

@ObjectType()
@Entity()
export class Video {
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    v_id:number;

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
    @Column({length:100})
    type:String;

    @Field()
    @Column({length:100})
    video_url:String;

    @Field()
    @Column()
    timestamp:Date;

    @Field()
    @Column('int')
    views:number;

    @Field()
    @Column({length:100})
    viewer_user:String;

    @Field()
    @Column('int')
    vid:number;

    @Field()
    @Column({length:100})
    thumbnail:String;
}
