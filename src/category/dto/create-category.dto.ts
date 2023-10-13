import { Article } from "src/article/entities/Ariticle.entity";

export interface CreateCategorDto {
    readonly name: string;
    readonly articles: Article[];
    
}