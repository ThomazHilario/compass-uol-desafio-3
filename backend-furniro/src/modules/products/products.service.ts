import { Injectable } from '@nestjs/common';
import { ProductSchema } from './dtos/product.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ProductsService {

    constructor(private prisma:PrismaService){}

    // Create Product in Database
    async create(data:ProductSchema ){
        await this.prisma.product.create({
            data:{
                name: data.name,
                sku: data.sku,
                category_id: data.category_id,
                description: data.description,
                large_description: data.large_description,
                price: data.price,
                discount_price: data.discount_price,
                discount_percent: data.discount_percent,
                is_new: data.is_new,
                image_link: data.image_link,
                other_images_link: data.other_images_link,
                created_date:new Date().toISOString(),
                updated_date: new Date().toISOString()
            }
        })

        return 'Product inserted'
    }

    // Seach all products in Database
    async seachProducts(){
        // Seach all products
        const products = await this.prisma.product.findMany()

        // length products big for zero
        if(products.length > 0){
            return products
        } else {
            return 'Does not exist products'
        }
    }

    // Seach one product for id in Database
    async seachOneProduct(id:number){
        // Seach product with id
        const product = await this.prisma.product.findUnique({
            where:{
                id: id
            }
        })

        // return product
        return product
    }
}
