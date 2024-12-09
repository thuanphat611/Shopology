import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

import { CartItem } from './entities';
import { CartRepository } from './cart.repository';
import { AddItemDto } from './dto';
import { ItemNotInCartException } from './cart.exception';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartItem)
    private cartRepository: CartRepository,
    private readonly httpService: HttpService,
  ) {}

  async getCart(userId: string) {
    const selectedFields = [
      'title',
      'thumbnail',
      'price',
      'discountPercentage',
      'rating',
      'stock',
    ];

    const cartItemList = await this.cartRepository.find({
      where: {
        customerId: userId,
      },
    });

    const productIds = cartItemList.map((item) => item.productId);

    const apiUrl = `https://dummyjson.com/products?ids=${productIds.join(',')}&select=${selectedFields.join(',')}`;

    const productResponse = await lastValueFrom(this.httpService.get(apiUrl));

    const products = productResponse.data.products;

    const result = cartItemList.map((cartItem) => ({
      quantity: cartItem.quantity,
      addedDate: cartItem.createdAt,
      ...products.find((product) => product.id === Number(cartItem.productId)),
    }));

    return { itemList: result };
  }

  async addItemToCart(userId: string, data: AddItemDto) {
    const isItemInCart = await this.cartRepository.findOne({
      where: {
        customerId: userId,
        productId: data.productId,
      },
    });

    if (isItemInCart) {
      isItemInCart.quantity = isItemInCart.quantity + 1;
      await this.cartRepository.save(isItemInCart);
      return isItemInCart;
    }

    const newItem = await this.cartRepository.create({
      customerId: userId,
      ...data,
    });

    await this.cartRepository.save(newItem);

    return newItem;
  }

  async deleteItem(userId: string, productId: string) {
    return this.cartRepository.delete({
      customerId: userId,
      productId,
    });
  }

  async updateItemQuantity(
    userId: string,
    productId: string,
    quantity: number,
  ) {
    const cartItem = await this.cartRepository.findOne({
      where: {
        customerId: userId,
        productId,
      },
    });

    if (!cartItem) {
      throw new ItemNotInCartException();
    }

    cartItem.quantity = quantity;

    await this.cartRepository.save(cartItem);

    return { ...cartItem };
  }
}
