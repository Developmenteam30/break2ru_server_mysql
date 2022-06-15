import { Module } from '@nestjs/common';
import { VofeService } from './vofe.service';
import { VofeController } from './vofe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vofe } from './entities/vofe.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vofe]),
  ],
  controllers: [VofeController],
  providers: [VofeService]
})
export class VofeModule {}
