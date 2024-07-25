import { Injectable, NotFoundException } from '@nestjs/common';
import { createProductRequest } from './dto/create-product.request';
import { PrismaService } from '../prisma/prisma.service';

import { promises as fs } from 'fs';
import { join } from 'path';
import { PRODUCT_IMAGES } from './product-images';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProduct(data: createProductRequest, userId: number) {
    return this.prismaService.product.create({
      data: { ...data, userId },
    });
  }

  async getProducts() {
    const products = await this.prismaService.product.findMany();
    const productsWithImages = await Promise.all(
      products.map(async (product) => {
        const imageExists = await this.imageExist(product.id);
        console.log(`Product ID: ${product.id}, Image Exists: ${imageExists}`);
        return {
          ...product,
          imageExist: imageExists,
        };
      }),
    );

    return productsWithImages;
  }

  async getProduct(productId: number) {
    try {
      return {
        ...(await this.prismaService.product.findUniqueOrThrow({
          where: { id: productId },
        })),
        imageExist: await this.imageExist(productId),
      };
    } catch (error) {
      throw new NotFoundException('Product not found; id:' + productId);
    }
  }

  private async imageExist(productId: number) {
    const imagePath = join(`${PRODUCT_IMAGES}/${productId}.avif`);
    try {
      await fs.stat(imagePath);
      console.log(`Image found for product ID: ${productId}`);
      return true;
    } catch (error) {
      console.log(
        `Image not found for product ID: ${productId}, Error: ${error.message}`,
      );
      return false;
    }
  }
}
