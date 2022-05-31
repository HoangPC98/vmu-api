import { PartialType } from '@nestjs/swagger';
import { CreateChuyenNganhDto } from './create-chuyen-nghanh.dto';

export class UpdateChuyenNganhDto extends PartialType(CreateChuyenNganhDto) {}
