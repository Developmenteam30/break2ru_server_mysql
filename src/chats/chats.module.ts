import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity';
import { MessagingService } from 'src/messaging/messaging.service';
import { Messaging } from 'src/messaging/entities/messaging.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Password } from 'src/users/entities/password.entity';
import { JwtStrategy } from 'src/users/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { NotificationsService } from 'src/notifications.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Chat, Messaging, User, Password]),
    JwtModule.register({
      secretOrPrivateKey: 'secret12356789',
    })
  ],
  controllers: [ChatsController],
  providers: [ChatsService, MessagingService, UsersService, JwtStrategy, NotificationsService]
})
export class ChatsModule {}
