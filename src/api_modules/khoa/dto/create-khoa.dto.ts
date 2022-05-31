import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateKhoaDto {
  @ApiProperty({
    example: 'cntt',
  })
  @IsNotEmpty()
  @IsNumber()
  id: string;

  @ApiProperty({
    example: 'cong nghe thong tin',
  })
  @IsNotEmpty()
  @IsString()
  ten_khoa: string;

  @ApiProperty({
    example: 'Nguyễn Hữu Tuân',
  })
  @IsNotEmpty()
  @IsString()
  truong_khoa: string;

  @ApiProperty({
    example: '0123456789',
  })
  @IsNotEmpty()
  @IsString()
  dien_thoai: string;
}
