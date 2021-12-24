import { PrismaClient } from '@prisma/client';
import Produto from '../../../interfaces/produto';

const prisma = new PrismaClient();

export default {
  Produto: {
    categoria: (produto: Produto) =>
      prisma.categoria.findUnique({
        where: {
          id: produto.categoriaId,
        },
      }),
  },
  Query: {
    produtos: (
      _: any,
      args: { skip: number; take: number; categoriaId: number; search: string }
    ) =>
      prisma.produto.findMany({
        skip: args.skip,
        take: args.take,
        where: {
          categoriaId: args.categoriaId,
          nome: {
            contains: args.search,
            mode: 'insensitive',
          },
        },
      }),
  },

  Mutation: {
    addProduto: (_: any, args: { data: Produto }) =>
      prisma.produto.create({
        data: args.data,
      }),
  },
};
