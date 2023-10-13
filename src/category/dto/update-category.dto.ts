import { Article } from "src/article/entities/Ariticle.entity";

export interface UpdateCategorDto {
    readonly name: string;
    readonly articles: Article[];
    
}