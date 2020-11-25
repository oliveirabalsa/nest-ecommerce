import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryDTO, CategoryRO } from './dto/category.dto';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(CategoryEntity) private categoryRepository: Repository<CategoryEntity>) {}

   async save(category: CategoryDTO): Promise<CategoryRO> {
       return await this.categoryRepository.save(category)
   } 
}
