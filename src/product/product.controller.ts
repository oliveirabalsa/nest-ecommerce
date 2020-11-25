import { ProductDTO } from './dto/product.dto';
import { Body, CacheInterceptor, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService){}

@Post()
async save(@Body() product: ProductDTO) {
    return await this.productService.save(product)
}

@UseInterceptors(CacheInterceptor)
@Get()
async all() {
    return await this.productService.all()
}


}
