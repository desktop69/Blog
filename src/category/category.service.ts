import { Injectable } from '@nestjs/common';
import { Category } from './entities/Category.entity';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(Category.name) 
        private articlerepo : mongoose.Model<Category>
      ){}


      
}
