import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { PostInfo } from 'src/post-info/entities/post-info.entity';

@ObjectType()
@Entity()
export class Password {
    @Field(() => Int, { description: 'Primary key' })
    @PrimaryGeneratedColumn()
    password_id: number;

    @Field()
    @Column({ unique: true })
    user_id: number;

    @Field()
    @Column({ length: 300 })
    password: String;

    @Field()
    @Column({ default: null })
    otp: String;
}
