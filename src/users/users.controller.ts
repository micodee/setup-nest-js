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
