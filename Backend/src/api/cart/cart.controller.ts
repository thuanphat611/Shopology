import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { CartService } from './cart.service';
import { SelfGuard } from '../auth/guards';
import { AddItemDto } from './dto';

@UseGuards(SelfGuard)
@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async getCart(@Param('id') userId: string) {
    return this.cartService.getCart(userId);
  }

  @Post(':id')
  async addItemToCart(@Param('id') userId: string, @Body() data: AddItemDto) {
    return this.cartService.addItemToCart(userId, data);
  }
}
