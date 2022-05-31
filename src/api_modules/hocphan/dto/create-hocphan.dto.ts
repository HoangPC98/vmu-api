import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHocPhanDto {
  @ApiProperty({
    example: 'tri tue nhan tao',
  })
  @IsNotEmpty()
  @IsString()
  ten: string;

  @ApiProperty({
    example: 2,
  })
  @IsNotEmpty()
  @IsNumber()
  so_tin_chi: number;

  @ApiProperty({
    example: 2,
  })
  @IsNotEmpty()
  @IsString()
  ma_chuyen_nganh: string;
}
