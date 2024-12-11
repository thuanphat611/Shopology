import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';

import { CartController } from './cart.controller';
import { CartItem } from './entities';
import { CartService } from './cart.service';

@Module({
  imports: [TypeOrmModule.forFeature([CartItem]), HttpModule],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
