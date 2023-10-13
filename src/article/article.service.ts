import { Injectable } from '@nestjs/common';
import { Article } from './entities/Ariticle.entity';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class ArticleService {

  constructor(
    @InjectModel(Article.name)
    private articlerepo: mongoose.Model<Article>
  ) { }
  async create(Data: Article): Promise<Article> {
    const createdArticle = new this.articlerepo(Data);
    return createdArticle.save();
  }
  async findAll(): Promise<Article[]> {
    return this.articlerepo.find();
  }
  async remove(id: string): Promise<Article> {
    return this.articlerepo.findByIdAndRemove(id);
  }
  async findOne(id: string): Promise<Article> {
    return this.articlerepo.findById(id);
  }
  async update(id: string, Data: Article): Promise<Article> {
    return this.articlerepo.findByIdAndUpdate(id, Data, { new: true });
  }
  async findArticlesByCategory(categoryId: string): Promise<Article[]> {
    return this.articlerepo.find({ 'category': categoryId });
  }

}
