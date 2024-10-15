import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [ProductsModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
