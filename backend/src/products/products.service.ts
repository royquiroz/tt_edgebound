import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { FilterQuery } from './interfaces/interfaces';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const product = createProductDto;
      await this.productRepository.save(product);

      return product;
    } catch (error) {
      throw new InternalServerErrorException(`Error: ${error}`);
    }
  }

  async findAll() {
    const products = await this.productRepository.find({});

    return products;
  }

  async findOneQuery(query: FilterQuery) {
    const products = await this.productRepository.findOneBy({
      name: query.filter,
    });

    return products;
  }

  async findCategory(category: string) {
    const products = await this.productRepository.findBy({
      category,
    });

    const numbers = this.getRandomNumber(products.length);
    return [products[numbers[0]], products[numbers[1]]];
  }

  private getRandomNumber(maxNumber) {
    const numbers = [];

    for (let index = 0; index < 2; index++) {
      const value = Math.floor(Math.random() * maxNumber);
      if (!numbers.includes(value)) {
        numbers.push(value);
      } else {
        index--;
      }
    }

    return numbers;
  }
}
