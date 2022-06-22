import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

import { JwtModule } from '@nestjs/jwt';

import { Connection } from 'typeorm';
import { PostInfoModule } from './post-info/post-info.module';
import { AdminModule } from './admin/admin.module';
import { BlockModule } from './block/block.module';
import { CommentModule } from './comment/comment.module';
import { FollowerModule } from './follower/follower.module';
import { HashtagModule } from './hashtag/hashtag.module';
import { HourshineModule } from './hourshine/hourshine.module';
import { NotificationsModule } from './notifications/notifications.module';
import { NewsModule } from './news/news.module';
import { VideoModule } from './video/video.module';
import { HourshineteamModule } from './hourshineteam/hourshineteam.module';
import { ImagesModule } from './images/images.module';
import { LikeModule } from './like/like.module';
import { LikeCommentModule } from './like-comment/like-comment.module';
import { UserVotingModule } from './user-voting/user-voting.module';
import { VofeModule } from './vofe/vofe.module';
import { ChatsModule } from './chats/chats.module';
import { ViewsModule } from './views/views.module';
import { MessagingModule } from './messaging/messaging.module';
import { MailerModule } from '@nestjs-modules/mailer';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '202.21.38.119',
      port: 3306,
      username: 'break2ru_raghu',
      password: 'Rnath123@',
      database: 'break2ru_test',
      entities: [
        User
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    GraphQLModule.forRoot({
      include: [PostInfoModule, UsersModule],
      autoSchemaFile: true,
    }),
    UsersModule, 
    JwtModule.register({
      secretOrPrivateKey: 'secret12356789'
    }), 
    PostInfoModule,
    AdminModule,
    BlockModule,
    CommentModule,
    FollowerModule,
    HashtagModule,
    HourshineModule,
    NotificationsModule,
    NewsModule,
    VideoModule,
    HourshineteamModule,
    ImagesModule,
    LikeModule,
    LikeCommentModule,
    UserVotingModule,
    VofeModule,
    MongooseModule.forRoot('mongodb://root:JZ3atM8TZbWc@13.233.35.149:27017/break2ru?authSource=admin'),
    ChatsModule,
    ViewsModule,
    MessagingModule, 
    MailerModule.forRoot({
      transport: 'smtps://info@curveinfotech.com:Curve2692@mail.curveinfotech.com',
      defaults: {
        from: '"Break2ru" <info@curveinfotech.com>',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
