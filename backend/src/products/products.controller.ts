import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FilterQuery } from './interfaces/interfaces';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('search')
  findOneQuery(@Query() query: FilterQuery) {
    return this.productsService.findOneQuery(query);
  }

  @Get(':category')
  findCategory(@Param('category') category: string) {
    return this.productsService.findCategory(category);
  }
}
