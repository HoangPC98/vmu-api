import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Weekday } from 'src/dataTypes/enum.types';
export class CreateLopHocPhanDto {
  @ApiProperty({
    example: 'tri tue nhan tao',
  })
  @IsNotEmpty()
  @IsNumber()
  id_mon: number;

  @ApiProperty({
    example: 2,
  })
  @IsNotEmpty()
  @IsNumber()
  id_giang_vien: number;

  @ApiProperty({
    example: '420-A4',
  })
  @IsNotEmpty()
  @IsString()
  phong_hoc: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsNumber()
  si_so_max: number;

  @ApiProperty({})
  @IsNotEmpty()
  @IsNumber()
  si_so_min: number;


  @ApiProperty({ example: 'Thứ 2' })
  @IsNotEmpty()
  @IsEnum(['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'])
  ngay_hoc: Weekday;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  ngay_bat_dau: Date;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  ngay_ket_thuc: Date;
}
