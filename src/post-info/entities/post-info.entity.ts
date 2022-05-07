
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Image } from 'src/images/entities/image.entity';
import { Video } from 'src/video/entities/video.entity';

@ObjectType()
@Entity()
export class PostInfo {
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    post_id: number;

    @Field(() => User)
    @ManyToOne(() => User, { eager: true })
    @JoinColumn()
    user:Promise<User>;

    @Field()
    @Column('int')
    user_id:number;

    @Field()
    @Column('int')
    share_id:number;

    @Field()
    @Column({length:50})
    share_user_name:String;

    @Field()
    @Column()
    post_type:String;

    @Field()
    @Column()
    text:String;

    @Field()
    @Column({type: 'text', nullable: true})
    hashtag:String;

    @Field()
    @Column({type: 'text', nullable: true})
    userstag:String;

    @Field()
    @Column()
    location:String;

    @Field()
    @Column()
    privacy:String;

    @Field()
    @Column()
    likes:number;

    @Field()
    @Column()
    comment:number;

    @Field()
    @Column()
    status:String;

    @Field()
    @Column()
    date_time:Date;

    @Field()
    @Column()
    time_stamp:Date;

    @OneToMany(() => Image, image => image.post)
    images: Promise<Image[]>;

    @OneToMany(() => Video, video => video.post)
    videos: Promise<Video[]>;
}


