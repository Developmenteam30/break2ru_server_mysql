import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { PostInfo } from 'src/post-info/entities/post-info.entity';

@ObjectType()
@Entity()
export class User {
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    user_id: number;

    @Field()
    @Column({ length: 100 })
    first_name:String;

    @Field()
    @Column({ length: 100 })
    last_name:String;

    @Field()
    @Column({ length: 100, unique: true })
    user_name:String;

    @Field()
    @Column({ length: 100, unique: true })
    user_email:String;

    @Field()
    @Column({ length: 100 })
    mob_no:String;

    // @Field()
    // @Column({ length: 300 })
    // password: String;

    @Field()
    @Column({ length: 100, nullable: true })
    dob: String;

    @Field()
    @Column({ length: 100, nullable: true })
    gender: String;

    @Field()
    @Column({ length: 100, nullable: true })
    bio: String;

    @Field()
    @Column({ length: 100, nullable: true })
    address: String;

    @Field()
    @Column({ length: 100, nullable: true })
    city: String;

    @Field()
    @Column({ length: 100, nullable: true })
    state: String;

    @Field()
    @Column({ length: 100, nullable: true })
    country: String;

    @Field()
    @Column({ length: 200, default: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png' })
    image: String;

    @Field()
    @Column({ length: 200, default: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png' })
    thumb_img: String;

    @Field()
    @Column({ length: 300, default: 'https://media.istockphoto.com/photos/dark-black-and-blue-grungy-wall-background-for-display-or-montage-of-picture-id1150477705?k=20&m=1150477705&s=612x612&w=0&h=Yrqw1w6bEJ40kZFTSovkLtu4VE52zLgl-n6AE1t2BuM=' })
    cover_photo: String;

    @Field()
    @Column({ length: 100, nullable: true })
    url: String;

    @Field()
    @Column({ length: 100 })
    date_time: String;

    @Field()
    @Column({ length: 300, nullable: true })
    token_android: String;

    @Field()
    @Column({ length: 100, nullable: true })
    token_ios: String;

    @Field()
    @Column({ length: 100 })
    followerCount: String;

    @Field()
    @Column({ length: 100 })
    followingCount: String;

    @Field()
    @Column({default: true})
    status: Boolean;

    @OneToMany(() => PostInfo, postInfo => postInfo.user, {
        cascade: true
    })
    posts: Promise<PostInfo[]>;
}
