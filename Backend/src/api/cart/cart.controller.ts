import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { SelfGuard } from '../auth/guards';

import { CartService } from './cart.service';
import { AddItemDto, UpdateQuantityDto } from './dto';

@UseGuards(SelfGuard)
@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @HttpCode(HttpStatus.OK)
  @Get(':id/count')
  async getCount(@Param('id') userId: string) {
    return this.cartService.getCount(userId);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async getCart(@Param('id') userId: string) {
    return this.cartService.getCart(userId);
  }

  @Post(':id')
  async addItemToCart(@Param('id') userId: string, @Body() data: AddItemDto) {
    return this.cartService.addItemToCart(userId, data);
  }

  @Delete(':id/item/:productId')
  async deleteItem(
    @Param('id') userId: string,
    @Param('productId') productId: string,
  ) {
    return this.cartService.deleteItem(userId, productId);
  }

  @Put(':id/item/:productId')
  async updateItemQuantity(
    @Param('id') userId: string,
    @Param('productId') productId: string,
    @Body() data: UpdateQuantityDto,
  ) {
    return this.cartService.updateItemQuantity(
      userId,
      productId,
      data.quantity,
    );
  }
}
