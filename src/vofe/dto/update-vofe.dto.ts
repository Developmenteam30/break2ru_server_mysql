import { PartialType } from '@nestjs/swagger';
import { CreateVofeDto } from './create-vofe.dto';

export class UpdateVofeDto extends PartialType(CreateVofeDto) {}
