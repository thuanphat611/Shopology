import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { SelfGuard } from '../auth/guards';

import { WishListService } from './wish-list.service';
import { AddItemDto } from './dto';

@UseGuards(SelfGuard)
@Controller('wish-list')
export class WishListController {
  constructor(private wishListService: WishListService) {}

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async getWishList(@Param('id') userId: string) {
    return this.wishListService.getWishList(userId);
  }

  @Post(':id')
  async addItemToWishList(
    @Param('id') userId: string,
    @Body() data: AddItemDto,
  ) {
    return this.wishListService.addItemToWishList(userId, data.productId);
  }

  @Delete(':id/item/:productId')
  async deleteItem(
    @Param('id') userId: string,
    @Param('productId') productId: string,
  ) {
    return this.wishListService.deleteItem(userId, productId);
  }
}
