import { IsBoolean, IsNumber, IsString, IsNotEmpty } from 'class-validator'

export class ProductSchema{
    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    subTitle:string

    @IsString()
    @IsNotEmpty()
    sku:string

    @IsNumber()
    @IsNotEmpty()
    category_id:number

    @IsString()
    @IsNotEmpty()
    description:string

    @IsString()
    @IsNotEmpty()
    large_description:string

    @IsNumber()
    price: number

    @IsNumber()
    discount_price:number

    @IsNumber()
    discount_percent:number

    @IsBoolean()
    is_new:boolean

    @IsString()
    image_link:string

    @IsString()
    other_images_link:string

}