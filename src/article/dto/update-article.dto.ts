import { Category } from "src/category/entities/Category.entity";

export interface UpdateArticleDto {
    readonly title: string;
    readonly content: string;
    readonly category: Category;
    readonly CreatedAt: Date;
}
