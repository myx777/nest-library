import {Injectable} from "@nestjs/common";
import {Book} from "./interfaces/book";

@Injectable()
export class BooksService {
    private readonly books: Book[] = [];
    add(book: Book) {
        this.books.push(book);
    }
}