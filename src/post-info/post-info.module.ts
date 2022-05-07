import { Module } from '@nestjs/common';
import { PostInfoService } from './post-info.service';
import { PostInfoController } from './post-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostInfo } from './entities/post-info.entity';
import { PostResolver } from './post-info.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostInfo]),
  ],
  controllers: [PostInfoController],
  providers: [PostResolver, PostInfoService]
})
export class PostInfoModule {}
