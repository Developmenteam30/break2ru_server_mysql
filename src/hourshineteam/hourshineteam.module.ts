import { Module } from '@nestjs/common';
import { HourshineteamService } from './hourshineteam.service';
import { HourshineteamController } from './hourshineteam.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hourshineteam } from './entities/hourshineteam.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hourshineteam]),
  ],

  controllers: [HourshineteamController],
  providers: [HourshineteamService]
})
export class HourshineteamModule {}
