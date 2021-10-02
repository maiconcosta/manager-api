import { PrismaClient } from '@prisma/client';
import Produto from '../../../interfaces/produto';
const prisma = new PrismaClient();

export default {
  Query: {
    produtos: () => prisma.produto.findMany(),
  },

  Mutation: {
    addProduto: (_: any, args: { data: Produto }) =>
      prisma.produto.create({
        data: args.data,
      }),
  },
};
