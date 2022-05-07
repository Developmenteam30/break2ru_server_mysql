import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserResolver } from './users.resolver';
import { Password } from './entities/password.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Password]),
    JwtModule.register({
      secretOrPrivateKey: 'secret12356789',
    })],
  controllers: [UsersController],
  providers: [
    UserResolver, UsersService, JwtStrategy]
})
export class UsersModule {}
