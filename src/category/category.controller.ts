import { AuthGuard } from "./../shared/auth.guard";
import { UseGuards } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { Body, Controller, Post } from "@nestjs/common";
import { CategoryDTO } from "./dto/category.dto";

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(new AuthGuard())
  @Post()
  async save(@Body() category: CategoryDTO) {
    return await this.categoryService.save(category);
  }
}
