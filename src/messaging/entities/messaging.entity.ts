import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { PostInfo } from 'src/post-info/entities/post-info.entity';

@ObjectType()
@Entity()
export class Messaging {
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    message_id: number;

    @Field()
    @Column('text')
    message: string;

    @Field()
    @Column({default: null})
    image: string;

    @Field()
    @Column({default: null})
    audio: string;

    @Field()
    @Column({default: null})
    video: string;

    @Field(() => User)
    @ManyToOne(() => User, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn()
    senderid:Promise<User>;

    @Field(() => PostInfo)
    @ManyToOne(() => PostInfo, { eager: true, onDelete: "CASCADE"})
    @JoinColumn()
    post:Promise<PostInfo>;

    @Field()
    @Column('int')
    roomId: string;

    @Field()
    @Column({length: 20})
    time: string;

    @Field()
    @Column({length: 30})
    date: string;

    @Field()
    @Column({default: '0'})
    status: string;

}
