import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { map, catchError } from 'rxjs';

import { GetAllProductsDto } from './dto';

@Injectable()
export class ProductService {
  constructor(private readonly httpService: HttpService) {}

  async getAll({ skip, limit }: GetAllProductsDto) {
    const selectedFields = [
      'title',
      'description',
      'images',
      'brand',
      'category',
      'price',
      'discountPercentage',
      'rating',
      'stock',
    ];

    return this.httpService
      .get('https://dummyjson.com/products', {
        params: {
          select: selectedFields.join(','),
          skip,
          limit,
        },
      })
      .pipe(
        map((response) => response.data),
        catchError((error) => {
          throw new BadRequestException(error.response.data.message);
        }),
      );
  }

  async getById(id: number) {
    return this.httpService.get(`https://dummyjson.com/products/${id}`).pipe(
      map((response) => response.data),
      catchError((error) => {
        throw new BadRequestException(error.response.data.message);
      }),
    );
  }

  async getByCategory(category: string) {
    const selectedFields = [
      'title',
      'description',
      'images',
      'brand',
      'category',
      'price',
      'discountPercentage',
      'rating',
      'stock',
    ];

    return this.httpService
      .get(`https://dummyjson.com/products/category/${category}`, {
        params: {
          select: selectedFields.join(','),
        },
      })
      .pipe(
        map((response) => response.data),
        catchError((error) => {
          throw new BadRequestException(error.response.data.message);
        }),
      );
  }

  async getBestSeller() {
    const selectedFields = [
      'title',
      'description',
      'images',
      'brand',
      'category',
      'price',
      'discountPercentage',
      'rating',
      'stock',
    ];

    return this.httpService
      .get('https://dummyjson.com/products', {
        params: {
          select: selectedFields.join(','),
          skip: 0,
          limit: 4,
        },
      })
      .pipe(
        map((response) => response.data),
        catchError((error) => {
          throw new BadRequestException(error.response.data.message);
        }),
      );
  }
}
