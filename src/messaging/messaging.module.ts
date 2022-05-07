import { Module } from '@nestjs/common';
import { MessagingService } from './messaging.service';
import { MessagingGateway } from './messaging.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Messaging } from './entities/messaging.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Messaging]),
  ],
  providers: [MessagingGateway, MessagingService]
})
export class MessagingModule {}
