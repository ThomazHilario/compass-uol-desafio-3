import { Injectable } from "@nestjs/common";
import { ProductSchema } from './dtos/product.dto';
import { UpdateProductDto } from "./dtos/updateProduct.dto";
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ProductsRepository{
    constructor(private prisma:PrismaService){}

    // Create Product in Database
    async create(data:ProductSchema ){
        await this.prisma.product.create({
            data:{
                name: data.name,
                subTitle:data.subTitle,
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
    async seachProducts(page?:number, limit?:number, isNew?:boolean, isDiscount?:boolean, categoryId?:number, orderBy?:string){
        // Seach all products
        const products = await this.prisma.product.findMany()

        // Types sort for products
        const sortTypes = {
            'default':(array:ProductSchema[]) => array,
            'cres':(array:ProductSchema[]) => array.sort((a, b) => a.price - b.price),
            'desc':(array:ProductSchema[]) => array.sort((a, b) => b.price - a.price), 
        }
    
        // length products big for zero
        if(products.length > 0){
            // if you have a limit
            if(limit){

                // Return products new and with discount
                if(isNew && isDiscount){
                    return products.filter(product => product.discount_percent > 0 || product.is_new === isNew).slice(0, limit)
                }

                // Return new products with limit
                if(isNew){
                    return products.filter(product => product.is_new === isNew).slice(0, limit)
                }

                // Return Products per page with limits
                if(page){
                    // Calc initial and end value per page
                    const initialQuantity = (page - 1) * limit
                    const endQuantity = initialQuantity + limit

                    // Find products in quantity specified
                    const productsPerPage = products.slice(initialQuantity, endQuantity)

                    // Case have orderBy
                    if(orderBy){
                        return ({
                            productsPerPage:productsPerPage.length > 0 ? sortTypes[orderBy](productsPerPage) : 'Não possui mais produtos',
                            totalPages: Math.ceil(products.length / limit)
                        })
                    }

                    // Return products
                    return ({
                        productsPerPage:productsPerPage.length > 0 ? productsPerPage : 'Não possui mais produtos',
                        totalPages: Math.ceil(products.length / limit)
                    })
                }

                if(categoryId){
                    return products.filter(product => product.category_id === categoryId).slice(0, limit)
                }

                if(orderBy){
                    return sortTypes[orderBy](products).slice(0, limit)
                }

                // Return products with limit
                return products.slice(0, limit)
            }

            // Return new products
            if(isNew){
                return products.filter(product => product.is_new === isNew)
            }

            // Return new products with discount
            if(isNew && isDiscount){
                return products.filter(product => product.discount_percent > 0 && product.is_new === isNew)
            }

            // Return products
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

    // Update one product
    async updateProduct(id:number, data:UpdateProductDto){
        await this.prisma.product.update({
            where:{
                id:id
            },
            data:{
                name:data.name,
                price:data.price,
                discount_price:data.discount_price,
                discount_percent:data.discount_percent,
                image_link:data.image_link,
                updated_date: new Date().toISOString()
            }
        })
    }
}