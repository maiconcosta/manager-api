import { PrismaClient, StatusPedido } from '@prisma/client';

const prisma = new PrismaClient();

export default {
  Query: {
    statusesPedido: () => prisma.statusPedido.findMany(),
  },

  Mutation: {
    addStatusPedido: (_: any, args: { data: StatusPedido }) =>
      prisma.statusPedido.create({
        data: args.data,
      }),
  },
};
