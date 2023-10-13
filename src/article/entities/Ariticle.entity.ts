import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Category } from 'src/category/entities/Category.entity';
import { Types } from 'mongoose';

@Schema()
export class Article {
  
  
  @Prop({ required: false })
  title: string;

  @Prop({ required: false })
  content: string;

 

  @Prop({ default: Date.now, required: false  })
  CreatedAt: Date;
}

export const ArticlesSchema = SchemaFactory.createForClass(Article);
