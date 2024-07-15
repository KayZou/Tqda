import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.req';

@Injectable()
export class UsersService {
  createUser(data: CreateUserRequest) {
    console.log(data);
  }
}
