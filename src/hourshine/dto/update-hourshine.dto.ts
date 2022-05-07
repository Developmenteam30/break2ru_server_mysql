import { PartialType } from '@nestjs/swagger';
import { CreateHourshineDto } from './create-hourshine.dto';

export class UpdateHourshineDto extends PartialType(CreateHourshineDto) {}
