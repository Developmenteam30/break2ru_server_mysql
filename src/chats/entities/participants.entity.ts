import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { Chat } from './chat.entity';
  import { JoinColumn } from 'typeorm';
  
  @Entity()
  export default class Participation {
    @PrimaryGeneratedColumn('uuid')
    public id: string;
  
    @Column()
    participantId: string;
  
    @ManyToOne(() => Chat, {onDelete: 'CASCADE'})
    @JoinColumn()
    chatRoom: Chat;
  }