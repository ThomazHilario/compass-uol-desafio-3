import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductSchema } from './dtos/product.dto';
import { FindSpecifiedProductsDto } from './dtos/find-specified'
import { UpdateProductDto } from './dtos/updateProduct.dto';

@Controller('products')
export class ProductsController {
  // Constructor
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async readingProduct(@Query() query:FindSpecifiedProductsDto){

    // Seach for products in database with params or no
    const products = await this.productsService.seachProducts(Number(query.page), Number(query.limit),Boolean(query.isNew), Boolean(query.isDiscount), Number(query.category_id), query.orderBy)

    // Return product for limit
    return products
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

  @Post('/:id')
  async updateProduct(@Param('id') id:string, @Body() data:UpdateProductDto){
    return await this.productsService.updateProduct(Number(id), data) 
  }
}
