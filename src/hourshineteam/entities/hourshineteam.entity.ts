import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
@Entity()
export class Hourshineteam {
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    shine_id: number;

    @Field()
    @Column('int')
    user_id:number;

    @Field(() => User)
    @ManyToOne(() => User, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn()
    user:Promise<User>;

    @Field()
    @Column('int')
    share_id:number;

    @Field()
    @Column({length: 100})
    type:String;

    @Field()
    @Column({length: 100, nullable: true})
    content:String;

    @Field()
    @Column('text')
    url:String;

    @Field()
    @Column('text')
    thumbnail:String;

    @Field()
    @Column()
    date_time:Date;

    @Field()
    @Column('int', {default: 0})
    views:number;

    @Field()
    @Column()
    time_Stamp:Date;
}
