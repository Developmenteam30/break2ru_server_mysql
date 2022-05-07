import { ApiProperty } from "@nestjs/swagger"
import { PartialType } from '@nestjs/swagger';
import { CreatePostInfoDto } from './create-post-info.dto';

export class UpdatePostInfoDto extends PartialType(CreatePostInfoDto) {
}
