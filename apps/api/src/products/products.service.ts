import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll(params?: {
    skip?: number;
    take?: number;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput;
  }) {
    const { skip, take, where, orderBy } = params || {};
    return this.prisma.product.findMany({
      skip,
      take,
      where,
      orderBy,
      include: {
        category: true,
        variants: true,
      },
    });
  }

  async findOne(slug: string) {
    return this.prisma.product.findUnique({
      where: { slug },
      include: {
        category: true,
        variants: true,
      },
    });
  }

  async create(data: Prisma.ProductCreateInput) {
    return this.prisma.product.create({
      data,
      include: {
        category: true,
        variants: true,
      },
    });
  }

  async update(id: string, data: Prisma.ProductUpdateInput) {
    return this.prisma.product.update({
      where: { id },
      data,
      include: {
        category: true,
        variants: true,
      },
    });
  }

  async delete(id: string) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
