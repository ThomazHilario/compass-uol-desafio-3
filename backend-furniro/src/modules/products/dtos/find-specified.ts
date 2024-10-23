import { IsOptional, IsNumberString, IsBooleanString, IsString } from "class-validator";

export class FindSpecifiedProductsDto{
    @IsNumberString()
    @IsOptional()
    limit?:string

    @IsBooleanString()
    @IsOptional()
    isNew?:string

    @IsBooleanString()
    @IsOptional()
    isDiscount?:string

    @IsNumberString()
    @IsOptional()
    page?:string

    @IsNumberString()
    @IsOptional()
    category_id?:string

    @IsString()
    @IsOptional()
    orderBy?:string
}