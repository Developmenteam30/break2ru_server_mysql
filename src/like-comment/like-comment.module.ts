import { Module } from '@nestjs/common';
import { LikeCommentService } from './like-comment.service';
import { LikeCommentController } from './like-comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikeComment } from './entities/Like-Comment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([LikeComment]),
  ],
  controllers: [LikeCommentController],
  providers: [LikeCommentService]
})
export class LikeCommentModule {}
