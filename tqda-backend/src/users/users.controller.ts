import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.req';
import { UsersService } from './users.service';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseInterceptors(NoFilesInterceptor())
  createUser(@Body() req: CreateUserRequest) {
    return this.usersService.createUser(req);
  }

  @Get()
  getAllUsers(@Body() req) {
    return this.usersService.getAllUsers();
  }
}
