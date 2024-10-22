import { Injectable } from '@nestjs/common';
import { ProductSchema } from './dtos/product.dto';
import { UpdateProductDto } from './dtos/updateProduct.dto';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {

    constructor(private productsRepository:ProductsRepository){}

    // Create Product in Database
    async create(data:ProductSchema ){
        return this.productsRepository.create(data)
    }

    // Seach all products in Database
    async seachProducts(page?:number, limit?:number, isNew?:boolean, isDiscount?:boolean, categoryId?:number){
        return this.productsRepository.seachProducts(page, limit, isNew, isDiscount, categoryId)
    }

    // Seach one product for id in Database
    async seachOneProduct(id:number){
        return this.productsRepository.seachOneProduct(id)
    }

    // Update one product
    async updateProduct(id:number, data:UpdateProductDto){
        await this.productsRepository.updateProduct(id, data)
    }
}
