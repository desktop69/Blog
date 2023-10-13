import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Article } from 'src/article/entities/Ariticle.entity';

@Schema()
export class Category {

    @Prop({ required: false })
    name: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Article' }] }) // Define a reference to the Article entity
    articles: Article[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
