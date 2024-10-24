// Interface ProductProps
import { ProductProps } from "./product-type";

// Interface CartProps
export interface CartProps extends ProductProps{
    amount:number;
}