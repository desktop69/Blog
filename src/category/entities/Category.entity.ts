import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Article } from 'src/article/entities/Ariticle.entity';

@Schema()
export class Category {

    @Prop({ required: false })
    name: string;

 
}

export const CategorySchema = SchemaFactory.createForClass(Category);
