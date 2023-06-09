# Prepare

- install

    ```bash
    npm i -g nestjs/cli
    ```

    and then

    ```bash
    nest new server
    ```

- delete file

    - src/app.controller.spec.ts
    - src/app.controller.ts
    - src/app.service.ts

- in module delete

    ```bash
    import { Module } from '@nestjs/common';

    @Module({
    imports: [],
    })
    export class AppModule {}
    ```

## Module

- create module with cli

    ```bash
    nest g module books
    ```

## Controller

- create controller with cli

    ```bash
    nest g controller Users
    ```

    - open src/users/users.controller.ts
        >users.controller.ts

        ```bash
        import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

        @Controller('users')
        export class UsersController {
        @Get()
        GetAllUsers() {
            // do something
            return 'Hello World';
        }

        @Post()
        CreateUser() {
            // do something
            return;
        }

        @Put()
        UpdateUser() {
        // do something
        return
        }

        @Delete()
        DeleteUser() {
        // do something
        return
        }
        }
        ```

## Books

- Create module, controller in books with cli
    ```bash
    nest g module books
    nest g controller books
    ```

    >/src/books/books.controller.ts
    ```bash
    @Controller('books')
    export class BooksController {
    @Get()
    hello() {
    return 'Hello World'
    }
    }
    ```

    ```bash
    localhost:3000/books
    ```

    >/src/books/books.controller.ts
    ```bash
    @Controller('books')
    export class BooksController {
    @Get('/hello')
    hello() {
    return 'Hello World'
    }
    }
    ```

    ```bash
    localhost:3000/books/hello
    ```

    >/src/books/books.controller.ts
    ```bash
    @Controller('books')
    export class BooksController {
    @Get('/:name')
    hello(@Param('name') name:string) {
        return `Hello ${name}`;
    }
    }
    ```

    ```bash
    localhost:3000/books/{name}
    ```

    >books.controller.ts
    ```bash
    @Post()
    createBook(@Body() payload: any) {
    return payload
    }
    ```

    - or

    ```bash
    @Post()
    createBook(@Body('name') name: string) {
    return name
    }
    ```

    - method post
    ```bash
    localhost:3000/books
    ```
    menu body > x-www-form-urlencoded
    - example : name, age dll


## Running Project

```bash
npm start start:dev
```

## Create Provider

- same as dto (data transfer object)

    ```bash
    nest g service books
    ```

    >/books/books.controller.ts
    ```bash

    private booksService: BooksService
    constructor(booksService : BooksService) {
    this.booksService = booksService;
    }
    ```
    or

    ```bash

    constructor(private booksService: BooksService) {}
    ```

    ```bash
    @Get()
    getAllBooks() {
    return this.booksService.getAllBooks()
    }

    @Post()
    createBook(
        @Body('title') title: string,
        @Body('author') author: string,
        @Body('category') category: string,
    ) {
        return this.booksService.createBook(title, author, category);
    }
    ```

    in postman create post and check in get

    and then install uuid :

    ```bash
    npm i uuid
    ``` 

    import in books.service.ts
    ```bash
    import { v4 as uuidv4 } from 'uuid';
    ```

    ```bash
    createBook(title: string, author: string, category: string) {
    this.books.push({
      id: uuidv4(),
      title,
      author,
      category,
    });
    }
    ```


