import { Module } from '@nestjs/common';
import { HourshineService } from './hourshine.service';
import { HourshineController } from './hourshine.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hourshine } from './entities/hourshine.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hourshine]),
  ],
  controllers: [HourshineController],
  providers: [HourshineService]
})
export class HourshineModule {}
