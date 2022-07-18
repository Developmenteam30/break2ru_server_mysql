import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, JoinTable, ManyToMany } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
export enum type {
    shine = "shine",
    team = "team",
    video = "video",
    vote = "vote",
    image = "image"
}
@ObjectType()
@Entity()
export class View{
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    view_id:number; 

    @Field()
    @Column('int')
    data_id:number;

    @Field()
    @Column('int')
    user_id:number;

    @Field(() => User)
    @ManyToOne(() => User, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn()
    user:Promise<User>;

    @Field()
    @Column({
        type: "enum",
        enum: type,
        default: type.shine
    })
    type:type;
}
