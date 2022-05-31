import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateBangDiemDto {
  @ApiProperty({
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  id_hoc_vien: number;
  
  @ApiProperty({
    example: 22,
  })
  @IsNotEmpty()
  @IsNumber()
  id_hoc_phan: number;

  @ApiProperty({
    example: 6,
  })
  @IsOptional()
  @IsNumber()
  diem_x: number;

  @ApiProperty({
    example: 6,
  })
  @IsOptional()
  @IsNumber()
  diem_y: number;

  @ApiProperty({
    example: 6,
  })
  @IsOptional()
  @IsNumber()
  diem_btl: number;
}
