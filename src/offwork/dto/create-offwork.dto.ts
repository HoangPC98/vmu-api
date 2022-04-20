import { IsNotEmpty, IsDateString, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOffworkDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 1 })
  user_id: number;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({ example: '2022-01-04T03:57:17.549Z' })
  reg_start_at: string;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({ example: '2022-01-05T03:57:17.549Z' })
  reg_end_at: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'tired' })
  reason: string;
}
