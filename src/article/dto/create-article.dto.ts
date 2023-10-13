import { Category } from "src/category/entities/Category.entity";

export interface CreateArticleDto {
    readonly title: string;
    readonly content: string;
    readonly category: Category;
    readonly CreatedAt: Date;
}