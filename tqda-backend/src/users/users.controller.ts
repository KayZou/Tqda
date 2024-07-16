import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.req';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() req: CreateUserRequest) {
    return this.usersService.createUser(req);
  }

  @Get()
  getAllUsers(@Body() req) {
    return this.usersService.getAllUsers();
  }
}
