import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
@Entity()
export class Follower {
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    follower_id: number;

    @Field()
    @Column('int')
    sender:number;

    @Field(() => User)
    @ManyToOne(() => User, { eager: true })
    @JoinColumn()
    user_sender:Promise<User>;

    @Field()
    @Column('int')
    receiver:number;

    @Field(() => User)
    @ManyToOne(() => User, { eager: true })
    @JoinColumn()
    user_receiver:Promise<User>;

    @Field()
    @Column()
    date_time:Date;

    @Field()
    @Column('int')
    status:number;
}
