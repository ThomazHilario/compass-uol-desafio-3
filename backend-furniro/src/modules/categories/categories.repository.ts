import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";

@Injectable()
export class CategoriesRepository{
    constructor(private prisma:PrismaService){}

    // Reading Categories
    async readCategories(){
        const categories = await this.prisma.category.findMany()

        // Return categories in sequency
        return categories.sort((a, b) => a.id - b.id)
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