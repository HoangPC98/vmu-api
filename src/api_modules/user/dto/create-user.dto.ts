import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { GioiTinh, TrinhDo } from '../../../dataTypes/enum.types';

export class CreateUserDto {
  @ApiProperty({
    example: 'Nguyen Hoang Hai',
  })
  @IsNotEmpty()
  @IsString()
  ho_ten: string;

  @ApiProperty({
    example: 'male',
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
    example: 'long1234@vimaru.edu.vn',
  })
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty({
    example: '0123456789',
  })
  @IsOptional()
  @IsString()
  dien_thoai: string;

  @ApiProperty({
    example: '123 Tay Son, Dong Da, Ha Noi',
  })
  @IsOptional()
  @IsString()
  dia_chi: string;
}

export class CreateHocVienDto {
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

export class CreateGiangVienDto {
  @ApiProperty({
    example: 'cntt',
  })
  @IsNotEmpty()
  @IsString()
  id_khoa: string;

  @ApiProperty({
    example: '',
  })
  @IsNotEmpty()
  @IsEnum(['giáo sư', 'tiến sĩ', 'thạc sĩ', 'đại học'])
  trinh_do: TrinhDo;
}
