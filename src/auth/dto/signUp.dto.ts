import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Role } from 'src/dataTypes/enum.types';

export class SignUpDto {
  @ApiProperty({
    example: 'hoangpc',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    example: '123456',
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    example: 'Nguyen Hoang Hai',
  })
  @IsString()
  ho_ten: string;

  @ApiProperty({
    example: 'hai68510@st.vimaru.edu.vn',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    example: Role.GeneralUser,
  })
  @IsOptional()
  @IsEnum([Role.GeneralUser, Role.Admin, Role.GiangVien, Role.HocVien])
  user_type?: Role;

  @IsOptional()
  ngay_sinh: string;
}
