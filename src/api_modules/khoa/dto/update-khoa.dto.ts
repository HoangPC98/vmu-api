import { PartialType } from '@nestjs/swagger';
import { CreateKhoaDto } from './create-khoa.dto';

export class UpdateKhoaDto extends PartialType(CreateKhoaDto) {}
