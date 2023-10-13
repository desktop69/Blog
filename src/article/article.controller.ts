import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './entities/Ariticle.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) { }

  @Post()
  async create(@Body() dataDto: CreateArticleDto): Promise<Article> {
    const data = await this.articleService.create(dataDto);
    console.log("this posting -=>>> " + data);
    return data;
  }
  @Get()
  findAll(): Promise<Article[]> {
    return this.articleService.findAll()
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Article> {
    return this.articleService.findOne(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() articleData: UpdateArticleDto): Promise<Article> {
    return this.articleService.update(id, articleData);
  }
  @Get('by-category/:categoryId')
  async findArticlesByCategory(@Param('categoryId') categoryId: string): Promise<Article[]> {
    return this.articleService.findArticlesByCategory(categoryId);
  }

}
