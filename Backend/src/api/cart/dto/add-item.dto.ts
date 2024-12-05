import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddItemDto {
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
