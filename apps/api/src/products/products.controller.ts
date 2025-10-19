import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(
    @Query('category') category?: string,
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ) {
    return this.productsService.findAll({
      skip: skip ? parseInt(skip, 10) : undefined,
      take: take ? parseInt(take, 10) : 20,
      where: category ? { category: { slug: category } } : undefined,
      orderBy: { createdAt: 'desc' },
    });
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    return this.productsService.findOne(slug);
  }
}
