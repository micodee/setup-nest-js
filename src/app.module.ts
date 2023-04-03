import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { UsersController } from './users/users.controller';


@Module({
  imports: [BooksModule],
  controllers: [UsersController],
})
export class AppModule {}
