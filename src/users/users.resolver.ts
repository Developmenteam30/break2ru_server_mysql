import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly service: UsersService) {}

  @Query(() => [User], { name: 'alluser' })
  findAllUser() {
    return this.service.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOneUser(@Args('id', { type: () => Int }) id: number) {
    return this.service.findOne(id);
  }

}
