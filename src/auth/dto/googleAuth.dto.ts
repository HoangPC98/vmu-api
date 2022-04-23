import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class GoogleAuthDto {
  @ApiProperty({
    example: "hoanghaipc98",
  })
  @IsNotEmpty()
  @IsString()
  username: string;
}
