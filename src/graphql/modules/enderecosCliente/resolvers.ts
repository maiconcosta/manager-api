import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
  Query: {
    enderecosCliente: () => prisma.enderecoCliente.findMany(),
  },

  Mutation: {
    addEnderecoCliente: (_: any, args: { data: any }) =>
      prisma.enderecoCliente.create({
        data: args.data,
      }),
  },
};
