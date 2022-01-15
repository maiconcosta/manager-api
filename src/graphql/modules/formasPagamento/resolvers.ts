import { PrismaClient, FormaPagamento } from '@prisma/client';

const prisma = new PrismaClient();

export default {
  Query: {
    formasPagamento: () => prisma.formaPagamento.findMany(),
  },

  Mutation: {
    addFormaPagamento: (_: any, args: { data: FormaPagamento }) =>
      prisma.formaPagamento.create({
        data: args.data,
      }),
  },
};
