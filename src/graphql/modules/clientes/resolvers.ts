import {
  PrismaClient,
  Cliente as ClienteModel,
  EnderecoCliente,
} from '@prisma/client';

const prisma = new PrismaClient();

interface Cliente extends ClienteModel {
  endereco: EnderecoCliente;
}

export default {
  Cliente: {
    endereco: (cliente: Cliente) =>
      prisma.enderecoCliente.findMany({
        where: {
          clienteId: cliente.id,
        },
      }),
  },

  Query: {
    clientes: (_: any, args: { skip: number; take: number; search: string }) =>
      prisma.cliente.findMany({
        skip: args.skip,
        take: args.take,
        where: {
          nome: {
            contains: args.search,
            mode: 'insensitive',
          },
        },
      }),
  },

  Mutation: {
    addCliente: (_: any, args: { data: Cliente }) => {
      const { endereco, ...cliente } = args.data;

      return prisma.cliente.create({
        data: {
          ...cliente,
          endereco: {
            create: [endereco],
          },
        },
      });
    },
  },
};
