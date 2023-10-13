import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesSchema } from './entities/Ariticle.entity';

@Module({
   imports:[MongooseModule.forFeature([{name : 'Article', schema: ArticlesSchema }])],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}
