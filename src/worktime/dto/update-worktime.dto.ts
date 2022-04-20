import { PartialType } from '@nestjs/mapped-types';
import { CreateWorktimeDto } from './create-worktime.dto';

export class UpdateWorktimeDto extends PartialType(CreateWorktimeDto) {}
