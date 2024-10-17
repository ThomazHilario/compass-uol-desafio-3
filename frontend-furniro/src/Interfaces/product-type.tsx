export interface ProductProps{
    id:number;
    name:string;
    subTitle:string;
    sku:string;
    category_id:number;
    description:string;
    large_description:string;
    price:number;
    discount_price:number;
    discount_percent:number;
    is_new:boolean;
    image_link:string;
    other_images_link:string[];
    created_date:Date;
    updated_date:Date;
}