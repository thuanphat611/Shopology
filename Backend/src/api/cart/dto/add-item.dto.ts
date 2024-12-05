import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddItemDto {
  @IsNumber()
  @IsNotEmpty()
  productId: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}