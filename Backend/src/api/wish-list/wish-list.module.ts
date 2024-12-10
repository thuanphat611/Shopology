import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';

import { WishListService } from './wish-list.service';
import { WishListController } from './wish-list.controller';
import { WishListItem } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([WishListItem]), HttpModule],
  controllers: [WishListController],
  providers: [WishListService],
})
export class WishListModule {}
