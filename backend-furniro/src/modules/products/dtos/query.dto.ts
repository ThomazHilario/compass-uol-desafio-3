import { IsOptional, IsNumberString, IsBooleanString } from "class-validator";

export class QueryDto{
    @IsNumberString()
    @IsOptional()
    limit?:string

    @IsBooleanString()
    @IsOptional()
    isNew?:string

    @IsBooleanString()
    @IsOptional()
    isDiscount?:string
}