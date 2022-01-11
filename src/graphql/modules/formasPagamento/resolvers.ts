import { PrismaClient } from '@prisma/client';
import FormaPagamento from '../../../interfaces/formaPagamento';

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
