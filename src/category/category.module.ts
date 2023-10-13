import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './entities/Category.entity';

@Module({
  imports:[MongooseModule.forFeature([{name : 'Category', schema: CategorySchema }])],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
