import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
@Entity()
export class Vofe {
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    vote_id: number;

    @Field()
    @Column('int')
    userid:number;


    @Field(() => User)
    @ManyToOne(() => User, { eager: true })
    @JoinColumn()
    user:Promise<User>;

    @Field()
    @Column('text')
    image:String;

    @Field()
    @Column('text')
    Location:String;

    @Field()
    @Column({length: 50})
    profession:String;

    @Field()
    @Column()
    date_time:Date;

    @Field()
    @Column({length: 10})
    shows:String;

    @Field()
    @Column()
    timeStamp:Date;
}
