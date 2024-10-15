import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';

@Injectable()
export class CategoriesService {
    constructor(private categoriesRepository:CategoriesRepository){}

     // Reading Categories
     async readCategories(){
        return await this.categoriesRepository.readCategories()
    }

    // Reading unique Category
    async readUniqueCategory(id:number){
        // Return unique category for id
        return await this.categoriesRepository.readUniqueCategory(id)
    }
}
