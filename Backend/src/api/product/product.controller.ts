import { Controller, Get, Param, Query } from '@nestjs/common';

import { Public } from '@/decorators';

import { ProductService } from './product.service';
import { GetAllProductsDto, GetByIdListDto } from './dto';

@Public()
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getAll(@Query() query: GetAllProductsDto) {
    return this.productService.getAll(query);
  }

  @Get('list')
  async getByIdList(@Query() query: GetByIdListDto) {
    return this.productService.getByIdList(query.ids);
  }

  @Get('category/:category')
  async getByCategory(@Param('category') category: string) {
    return this.productService.getByCategory(category);
  }

  @Get('best-seller')
  async getBestSeller() {
    return this.productService.getBestSeller();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.productService.getById(id);
  }
}
