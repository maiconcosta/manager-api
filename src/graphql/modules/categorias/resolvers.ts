import { PrismaClient } from '@prisma/client';
import CategoriaProduto from '../../../interfaces/categoriaProduto';

const prisma = new PrismaClient();

export default {
  Query: {
    categorias: () => prisma.categoria.findMany(),
  },

  Mutation: {
    addCategoria: (_: any, args: { data: CategoriaProduto }) =>
      prisma.categoria.create({
        data: args.data,
      }),
  },
};
