import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
@Entity()
export class Like {
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    like_id: number;

    @Field()
    @Column('int')
    user_id:number;

    @Field(() => User)
    @ManyToOne(() => User, { eager: true })
    @JoinColumn()
    user:Promise<User>;

    @Field()
    @Column('int')
    post_id:number;

    @Field()
    @Column({length: 30})
    type:String;

    @Field()
    @Column()
    time_Stamp:Date;
}
