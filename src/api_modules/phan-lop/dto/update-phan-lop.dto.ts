import { PartialType } from '@nestjs/mapped-types';
import { CreatePhanLopDto } from './create-phan-lop.dto';

export class UpdatePhanLopDto extends PartialType(CreatePhanLopDto) {}
