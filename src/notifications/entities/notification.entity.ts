import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
@Entity()
export class Notification {
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    notification_id: number;

    
    @Field()
    @Column({length:100})
    type:String;

    
    @Field()
    @Column('int')
    sender_id:number;

    @Field(() => User)
    @ManyToOne(() => User, { eager: true })
    @JoinColumn()
    user_sender:Promise<User>;

    @Field()
    @Column('int')
    receiver_id:number;

    @Field(() => User)
    @ManyToOne(() => User, { eager: true })
    @JoinColumn()
    user_receiver:Promise<User>;
    
    @Field()
    @Column('int')
    post_id:number;

    
    @Field()
    @Column()
    image:String;

    
    @Field()
    @Column({length:100})
    description:String;

    
    @Field()
    @Column({length:100})
    url:String;

    
    @Field()
    @Column()
    date_time:Date;

    
    @Field()
    @Column('int')
    seen:number;
}
