import { Transform } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class GetByIdListDto {
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => value.split(','))
  ids: string[];
}
