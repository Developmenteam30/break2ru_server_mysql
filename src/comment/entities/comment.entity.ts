import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, JoinTable, ManyToMany } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
@Entity()
export class Comment{
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    comment_id:number; 

    @Field()
    @Column('int')
    post_id:number;

    @Field()
    @Column('int')
    user_id:number;

    @Field(() => User)
    @ManyToOne(() => User, { eager: true })
    @JoinColumn()
    user:Promise<User>;

    @Field()
    @Column({length:100})
    text:String;

    @Column({length:100})
    email:String;

    @Field()
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    date_time:Date;

    @Field()
    @Column({ type: "int", default: () => 0})
    likes:number;

    @Field()
    @Column('int')
    other_comment_id:number;

    @Field(() => Comment)
    @ManyToMany(type => Comment)
    @JoinTable()
    other_comment: Promise<Comment>;
}
