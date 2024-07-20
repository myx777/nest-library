import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {BooksController} from "./book/books.controller";
import {BooksService} from "./book/books.service";
import {BooksModule} from "./book/books.module";

@Module({
  imports: [BooksModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
