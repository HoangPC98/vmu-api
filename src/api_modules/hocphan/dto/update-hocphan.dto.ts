import { PartialType } from '@nestjs/swagger';
import { CreateHocPhanDto } from './create-hocphan.dto';

export class UpdateHocphanDto extends PartialType(CreateHocPhanDto) {}
