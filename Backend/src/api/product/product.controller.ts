import { Controller, Get, Param, Query } from '@nestjs/common';

import { Public } from '@/decorators';

import { ProductService } from './product.service';
import { GetAllProductsDto } from './dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Public()
  @Get()
  async getAll(@Query() query: GetAllProductsDto) {
    return this.productService.getAll(query);
  }

  @Public()
  @Get('category/:category')
  async getByCategory(@Param('category') category: string) {
    return this.productService.getByCategory(category);
  }

  @Public()
  @Get('best-seller')
  async getBestSeller() {
    return this.productService.getBestSeller();
  }

  @Public()
  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.productService.getById(id);
  }
}
