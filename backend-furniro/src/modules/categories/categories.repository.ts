import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";

@Injectable()
export class CategoriesRepository{
    constructor(private prisma:PrismaService){}

    // Reading Categories
    async readCategories(){
        return await this.prisma.category.findMany()
    }

    // Reading unique Category
    async readUniqueCategory(id:number){
        // Return unique category for id
        return await this.prisma.category.findUnique({
            where:{
                id:id
            }
        })
    }
}