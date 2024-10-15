import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async readCategories(){
    return this.categoriesService.readCategories()
  }

  @Get('/:id')
  async readUniqueCategory(@Param('id') id:string){
    // Return unique category for id
    return this.categoriesService.readUniqueCategory(Number(id))
  }

}
