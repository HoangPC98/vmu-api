import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreatePhanLopDto {
  @ApiProperty({example: 122})
  @IsNotEmpty()
  id_lop_hoc_phan: number | string
}
