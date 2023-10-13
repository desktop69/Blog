import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    ArticleModule,
    CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
