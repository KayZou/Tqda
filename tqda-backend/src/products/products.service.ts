import { Injectable } from '@nestjs/common';
import { createProductRequest } from './dto/create-product.request';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}
  async createProduct(data: createProductRequest, userId: number) {
    return this.prismaService.product.create({
      data: { ...data, userId },
    });
  }
}
