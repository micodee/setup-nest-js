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

    > users.controller.ts

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

  > /src/books/books.controller.ts

  ```bash
  @Controller('books')
  export class BooksController {
  @Get()
  hello() {
  return 'Hello World'
  }
  }
  ```

  - cek in postman

    ```bash
    localhost:3000/books
    ```

  > /src/books/books.controller.ts

  ```bash
  @Controller('books')
  export class BooksController {
  @Get('/hello')
  hello() {
  return 'Hello World'
  }
  }
  ```

  - cek in postman

    ```bash
    localhost:3000/books/hello
    ```

  > /src/books/books.controller.ts

  ```bash
  @Controller('books')
  export class BooksController {
  @Get()
  hello() {
  return 'Hello World'
  }
  }
  ```

## Running Project

```bash
npm start start:dev
```

- cek in postman

```bash
localhost:3000/books
```
