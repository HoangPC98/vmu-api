import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class GetAllOffworkQuery {
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({ example: 1 })
  page_number?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @ApiProperty({ example: 10 })
  page_size?: number = 10;

  @IsOptional()
  @IsString()
  // @Type(() => PartialType(Offwork)) // fixme, not work
  @ApiProperty({ example: 'id' })
  order_by?: string = 'id';

  @IsOptional()
  @IsEnum(['ASC', 'DESC'])
  @ApiProperty({ example: 'ASC' })
  order?: string = 'ASC';
}
