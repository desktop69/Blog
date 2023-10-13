import { Injectable } from '@nestjs/common';
import { Category } from './entities/Category.entity';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: mongoose.Model<Category>
  ) { }

  async getAllCategories(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async getCategoryById(categoryId: string): Promise<Category> {
    return this.categoryModel.findById(categoryId).exec();
  }

  async createCategory(categoryData: Category): Promise<Category> {
    const createdCategory = new this.categoryModel(categoryData);
    return createdCategory.save();
  }

  async updateCategory(categoryId: string, categoryData: Category): Promise<Category> {
    return this.categoryModel.findByIdAndUpdate(categoryId, categoryData, { new: true }).exec();
  }
  
  async deleteCategory(categoryId: string): Promise<Category> {
    return this.categoryModel.findByIdAndRemove(categoryId).exec();
  }
}
