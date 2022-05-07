import { PartialType } from '@nestjs/swagger';
import { CreateHourshineteamDto } from './create-hourshineteam.dto';

export class UpdateHourshineteamDto extends PartialType(CreateHourshineteamDto) {}
