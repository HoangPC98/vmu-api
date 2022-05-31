import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { CreateBangDiemDto } from './create-bang-diem.dto';

export class GetBangDiemOneOneQuery {
  @ApiProperty({
    example: 126,
  })
  @IsNotEmpty()
//   @IsNumber()
  id_hoc_phan: number;

  @ApiProperty({
    example: 6,
  })
  @IsOptional()
//   @IsNumber()
  id_hoc_vien: number;
}

export class GetBangDiemThongKeOfHocVien {
  @ApiProperty({
    example: 1,
  })
  @IsNotEmpty()
//   @IsNumber()
  id_hoc_vien: number;
}
