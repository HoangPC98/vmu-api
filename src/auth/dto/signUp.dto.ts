import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Role } from 'src/database/entities/phan_quyen.entity';

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
    example: 'Nguyen Hoang Hai'
  })
  @IsString()
  ho_ten: string;

  @ApiProperty({
    example: 'hai68510@st.vimaru.edu.vn'
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    example: Role.GeneralUser
  })
  @IsEnum([Role.GeneralUser, Role.Admin, Role.GiangVien, Role.HocVien])
  user_type: Role;
}
