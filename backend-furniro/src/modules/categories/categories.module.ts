import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesRepository } from './categories.repository';
import { CategoriesController } from './categories.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesRepository, CategoriesService, PrismaService],
})
export class CategoriesModule {}
