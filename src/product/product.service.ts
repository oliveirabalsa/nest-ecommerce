import { ProductDTO } from './dto/product.dto';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>){}

    async save (product: ProductDTO): Promise<any> {
        return await this.productRepository.save(product)
    }

    async all (): Promise<any> {
        return await this.productRepository.find()
    }
}
