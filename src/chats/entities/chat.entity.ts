import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, JoinTable, ManyToMany } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
@Entity()
export class Chat{
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    chat_id:number; 

    @Field()
    @Column('int')
    froms:number;

    @Field(() => User)
    @ManyToOne(() => User, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn()
    from_user:Promise<User>;

    @Field()
    @Column('int')
    tos:number;

    @Field(() => User)
    @ManyToOne(() => User, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn()
    to_user:Promise<User>;

    @Field()
    @Column("int", { default: 0 })
    members:number;

    @Field()
    @Column('int', { default: 0 })
    type:number;

    @Field()
    @Column("int", { default: 0 })
    fromcount:number;

    @Field()
    @Column("int", { default: 0 })
    tocount:number;

    @Field()
    @Column("timestamp", { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    timestamps: number;
}
