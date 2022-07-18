import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
@Entity()
export class LikeComment {
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    Ic_id: number;

    @Field()
    @Column('int')
    user_id:number;

    @Field(() => User)
    @ManyToOne(() => User, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn()
    user:Promise<User>;

    @Field()
    @Column('int')
    comment_id:number;

    @Field()
    @Column({length: 30})
    type:String;

    @Field()
    @Column('int')
    post_id:number;

    @Field()
    @Column()
    timestamp:Date;
}
