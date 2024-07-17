import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.req';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async createUser(data: CreateUserRequest) {
    try {
      return await this.prismaService.user.create({
        data: { ...data, password: await bcrypt.hash(data.password, 10) },
        select: { email: true, id: true },
      });
    } catch (error) {
      console.log(error);
      if (error.code === 'P2002')
        throw new UnprocessableEntityException('Email already exists!');
      throw error;
    }
  }

  async getAllUsers() {
    try {
      return await this.prismaService.user.findMany();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getUser(filter: Prisma.UserWhereUniqueInput) {
    return this.prismaService.user.findUniqueOrThrow({
      where: filter,
    });
  }
}
