import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductSchema } from './dtos/product.dto';
import { json } from 'node:stream/consumers';

@Controller('products')
export class ProductsController {
  // Constructor
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async readingProduct(){
    // Seach for products in database
    return await this.productsService.seachProducts()
  }

  @Get('/:id')
  async seachOneProduct(@Param('id') id:string){
    // Seach product especified
    return await this.productsService.seachOneProduct(Number(id))
  }

  @Post()
  async createProduct(@Body() body:ProductSchema){
    // Created product in database
    return await this.productsService.create(body)
  }
}
