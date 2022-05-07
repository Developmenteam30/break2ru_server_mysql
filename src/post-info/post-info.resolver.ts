import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostInfoService } from './post-info.service';
import { PostInfo } from './entities/post-info.entity';

@Resolver(() => PostInfo)
export class PostResolver {
  constructor(private readonly postService: PostInfoService) {}

  // @Query(() => [PostInfo], { name: 'allpost' })
  // findAllPost() {
  //   return this.postService.findAll();
  // }

  @Query(() => PostInfo, { name: 'post' })
  findOnePost(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findOne(id);
  }

  @Mutation(() => PostInfo)
  removePost(@Args('id', { type: () => Int }) id: number) {
    return this.postService.remove(id);
  }
}
