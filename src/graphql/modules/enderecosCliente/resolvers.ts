import { EnderecoCliente, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
  EnderecoCliente: {
    cliente: (enderecoCliente: EnderecoCliente) =>
      prisma.cliente.findUnique({
        where: {
          id: enderecoCliente.clienteId,
        },
      }),
  },

  Query: {
    enderecosCliente: () => prisma.enderecoCliente.findMany(),
  },

  Mutation: {
    addEnderecoCliente: (_: any, args: { data: EnderecoCliente }) =>
      prisma.enderecoCliente.create({
        data: args.data,
      }),
  },
};
