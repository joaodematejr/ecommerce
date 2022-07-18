import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/auth/user.entity';
import { ProductEntity } from 'src/product/product.entity';
import { ProductsService } from 'src/product/service/product/product.service';
import { CartEntity } from './cart.entity';
import { CartService } from './service/cart/cart.service';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, ProductEntity, Users])],
  providers: [CartService, ProductsService],
})
export class CartModule {}
