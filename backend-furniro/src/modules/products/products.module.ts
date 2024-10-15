import { Module } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ProductsController],
  providers: [ProductsRepository, ProductsService, PrismaService],
})
export class ProductsModule {}
