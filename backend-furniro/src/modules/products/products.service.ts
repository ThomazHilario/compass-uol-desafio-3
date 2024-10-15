import { Injectable } from '@nestjs/common';
import { ProductSchema } from './dtos/product.dto';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {

    constructor(private productsRepository:ProductsRepository){}

    // Create Product in Database
    async create(data:ProductSchema ){
        return this.productsRepository.create(data)
    }

    // Seach all products in Database
    async seachProducts(){
        return this.productsRepository.seachProducts()
    }

    // Seach one product for id in Database
    async seachOneProduct(id:number){
        return this.productsRepository.seachOneProduct(id)
    }
}
