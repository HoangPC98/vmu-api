import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { GioiTinh } from 'src/dataTypes/enum.types';

export class CreateHocVienDto {

  @ApiProperty({
    example: 'Nguyen Hoang Hai',
  })
  @IsNotEmpty()
  @IsString()
  ho_ten: string;

  @ApiProperty({
    example: 'Nguyen Hoang Hai',
  })
  @IsNotEmpty()
  @IsEnum(['male', 'female'])
  gioi_tinh: GioiTinh;

  @ApiProperty({
    example: '23/12/1997',
  })
  @IsNotEmpty()
  @IsString()
  ngay_sinh: string;

  @ApiProperty({
    example: 'cntt',
  })
  @IsNotEmpty()
  @IsString()
  id_khoa: string;

  @ApiProperty({
    example: 'kpm',
  })
  @IsNotEmpty()
  @IsString()
  id_chuyen_nganh: string;

  @ApiProperty({
    example: 7.8,
  })
  @IsNotEmpty()
  @IsNumber()
  diem_dau_vao: number;
}
