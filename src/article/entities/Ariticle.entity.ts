import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Category } from 'src/category/entities/Category.entity';
import { Types } from 'mongoose';

@Schema()
export class Article {
  
  
  @Prop({ required: false })
  title: string;

  @Prop({ required: false })
  content: string;

  @Prop({ type: Types.ObjectId, ref: 'Category' }) // Define a reference to the Category entity
  category: Category;

  @Prop({ default: Date.now, required: false  })
  CreatedAt: Date;
}

export const ArticlesSchema = SchemaFactory.createForClass(Article);
