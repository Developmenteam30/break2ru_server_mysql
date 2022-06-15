import { Module } from '@nestjs/common';
import { MessagingService } from './messaging.service';
import { MessagingGateway } from './messaging.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Messaging } from './entities/messaging.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { Password } from 'src/users/entities/password.entity';
import { JwtModule } from '@nestjs/jwt';
import { NotificationsService } from 'src/notifications.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Messaging]),
    TypeOrmModule.forFeature([User, Password]),
    JwtModule.register({
      secretOrPrivateKey: 'secret12356789',
    })],
  providers: [MessagingGateway, MessagingService, UsersService, NotificationsService]
})
export class MessagingModule {}
