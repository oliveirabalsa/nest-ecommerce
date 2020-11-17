import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CatalogModule } from './catalog/catalog.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [UserModule, CatalogModule, ProductModule, CategoryModule, BrandModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
