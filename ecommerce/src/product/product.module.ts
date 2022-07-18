import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { ProductService } from './service/product/product.service';

@Module({
  providers: [ProductService],
  imports: [TypeOrmModule.forFeature([ProductEntity])],
})
export class ProductModule {}
