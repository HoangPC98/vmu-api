import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { CreateBangDiemDto } from './create-bang-diem.dto';

export class UpdateBangDiemBody extends PartialType(CreateBangDiemDto) {
  @ApiProperty({
    example: 6,
  })
  @IsOptional()
  @IsNumber()
  diem_x: number;

  @ApiProperty({
    example: 6,
  })
  @IsOptional()
  @IsNumber()
  diem_y: number;
}

export class GetBangDiemQuery {
  @ApiProperty({
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  id_hoc_vien: number;

  @ApiProperty({
    example: 22,
  })
  @IsNotEmpty()
  @IsNumber()
  id_mon: number;
}
