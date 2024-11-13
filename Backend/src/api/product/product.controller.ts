import { Controller, Get, Param, Query } from '@nestjs/common';

import { ProductService } from './product.service';
import { GetAllProductsDto } from './dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getAll(@Query() query: GetAllProductsDto) {
    return this.productService.getAll(query);
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.productService.getById(id);
  }

  @Get('category/:category')
  async getByCategory(@Param('category') category: string) {
    return this.productService.getByCategory(category);
  }
}
