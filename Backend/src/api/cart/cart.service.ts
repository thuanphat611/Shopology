import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CartItem } from './entities';
import { CartRepository } from './cart.repository';
import { AddItemDto } from './dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartItem)
    private cartRepository: CartRepository,
  ) {}

  async getCart(userId: string) {
    const result = await this.cartRepository.find({
      where: {
        customerId: userId,
      },
    });

    return { result };
  }

  async addItemToCart(userId: string, data: AddItemDto) {
    const newItem = await this.cartRepository.create({
      customerId: userId,
      ...data,
    });

    await this.cartRepository.save(newItem);

    return newItem;
  }
}
