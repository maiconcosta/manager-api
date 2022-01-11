import { PrismaClient } from '@prisma/client';
import StatusPedido from '../../../interfaces/statusPedido';

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
