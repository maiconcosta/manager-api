import { PrismaClient, Categoria } from '@prisma/client';

const prisma = new PrismaClient();

export default {
  Categoria: {
    produtos: (categoria: Categoria) =>
      prisma.produto.findMany({
        where: {
          categoriaId: categoria.id,
        },
      }),
  },

  Query: {
    categorias: () => prisma.categoria.findMany(),
  },

  Mutation: {
    addCategoria: (_: any, args: { data: Categoria }) =>
      prisma.categoria.create({
        data: args.data,
      }),
  },
};
