import { IsNumber, IsString } from "class-validator";

export class UpdateProductDto{
    @IsString()
    name:string

    @IsNumber()
    price:number

    @IsNumber()
    discount_price:number

    @IsNumber()
    discount_percent:number

    @IsString()
    image_link:string
}