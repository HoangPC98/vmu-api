import { PartialType } from '@nestjs/swagger';
import { CreateHocVienDto } from './create-hoc-vien.dto';

export class UpdateHocVienDto extends PartialType(CreateHocVienDto) {}
