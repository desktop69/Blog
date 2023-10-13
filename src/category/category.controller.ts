import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './entities/Category.entity';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}
    @Post()
    async createCategory(@Body() categoryData: Category): Promise<Category> {
      return this.categoryService.createCategory(categoryData);
    }

    @Get()
    async getAllCategories(): Promise<Category[]> {
      return this.categoryService.getAllCategories();
    }
  
    @Get(':id')
    async getCategoryById(@Param('id') categoryId: string): Promise<Category> {
      return this.categoryService.getCategoryById(categoryId);
    }
    @Put(':id')
    async updateCategory(@Param('id') categoryId: string, @Body() categoryData: Category): Promise<Category> {
      return this.categoryService.updateCategory(categoryId, categoryData);
    }
  
    @Delete(':id')
    async deleteCategory(@Param('id') categoryId: string): Promise<Category> {
      return this.categoryService.deleteCategory(categoryId);
    }
    
}
