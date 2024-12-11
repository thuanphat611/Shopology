import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';

import { CartModule } from '../cart/cart.module';

import { WishListService } from './wish-list.service';
import { WishListController } from './wish-list.controller';
import { WishListItem } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([WishListItem]), HttpModule, CartModule],
  controllers: [WishListController],
  providers: [WishListService],
})
export class WishListModule {}
