import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

import { WishListItem } from './entities';
import { WishListRepository } from './wishList.repository';

@Injectable()
export class WishListService {
  constructor(
    @InjectRepository(WishListItem)
    private wishListRepository: WishListRepository,
    private readonly httpService: HttpService,
  ) {}

  async getWishList(userId: string) {
    const selectedFields = [
      'title',
      'thumbnail',
      'price',
      'discountPercentage',
      'rating',
      'stock',
    ];

    const wishListItemList = await this.wishListRepository.find({
      where: {
        customerId: userId,
      },
    });

    const productIds = wishListItemList.map((item) => item.productId);

    const apiUrl = `https://dummyjson.com/products?ids=${productIds.join(',')}&select=${selectedFields.join(',')}`;

    const productResponse = await lastValueFrom(this.httpService.get(apiUrl));

    const products = productResponse.data.products;

    const result = wishListItemList.map((wishListItem) => ({
      addedDate: wishListItem.createdAt,
      ...products.find(
        (product) => product.id === Number(wishListItem.productId),
      ),
    }));

    return { itemList: result };
  }

  async addItemToWishList(userId: string, productId: string) {
    const isItemInWishList = await this.wishListRepository.findOne({
      where: {
        customerId: userId,
        productId,
      },
    });

    if (isItemInWishList) {
      return isItemInWishList;
    }

    const newItem = await this.wishListRepository.create({
      customerId: userId,
      productId,
    });

    await this.wishListRepository.save(newItem);

    return newItem;
  }

  async deleteItem(userId: string, productId: string) {
    return this.wishListRepository.delete({
      customerId: userId,
      productId,
    });
  }
}
