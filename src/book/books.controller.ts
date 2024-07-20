import {BooksService} from "./books.service";
import {Book} from "./interfaces/book";
import {Body, Post} from "@nestjs/common";

export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Post()
    add(@Body() book: Book): void {
        this.booksService.add(book)
    }

}