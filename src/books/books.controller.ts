import { Controller, Get} from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  private booksService: BooksService

  constructor(booksService : BooksService) {
   this.booksService = booksService;
  }
  
  @Get()
  getAllBooks() {
   return this.booksService.getAllBooks()
  }
}
