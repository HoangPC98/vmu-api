import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateChuyenNganhDto {
  @ApiProperty({
    example: 'kpm',
  })
  @IsNotEmpty()
  @IsNumber()
  id: string;
  @ApiProperty({
    example: 'ki thuat phan mem',
  })
  @IsNotEmpty()
  @IsString()
  ten_chuyen_nganh: string;

  @ApiProperty({
    example: 'cnt',
  })
  @IsNotEmpty()
  @IsString()
  id_khoa: string;
}
