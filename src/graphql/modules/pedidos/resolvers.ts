import { PrismaClient, Pedido as PedidoModel } from '@prisma/client';

const prisma = new PrismaClient();

interface Pedido extends PedidoModel {
  produtos: number[];
}

export default {
  Pedido: {
    cliente: (pedido: Pedido) =>
      prisma.pedido.findMany({
        where: {
          id: pedido.clienteId,
        },
      }),
    pagamento: (pedido: Pedido) =>
      prisma.formaPagamento.findUnique({
        where: {
          id: pedido.pagamentoId,
        },
      }),
    status: (pedido: Pedido) =>
      prisma.statusPedido.findUnique({
        where: {
          id: pedido.statusId,
        },
      }),
    produtos: () => {
      return prisma.produtosPedidos.findMany({
        include: {
          produtos: true,
        },
      });
    },
  },

  Query: {
    pedidos: (_: any, args: { skip: number; take: number }) =>
      prisma.pedido.findMany({
        skip: args.skip,
        take: args.take,
        include: {
          produtos: true,
        },
      }),
  },

  Mutation: {
    addPedido: (_: any, args: { data: Pedido }) => {
      const {
        total,
        observacao,
        prazoEntrega,
        clienteId,
        pagamentoId,
        statusId,
        produtos,
      } = args.data;

      const map = produtos.reduce(
        (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
        new Map()
      );
      const arrProdutos = [...map.keys()];
      const count = [...map.values()];

      return prisma.pedido.create({
        data: {
          total,
          observacao,
          prazoEntrega,
          pagamento: {
            connect: {
              id: pagamentoId,
            },
          },
          cliente: {
            connect: {
              id: clienteId,
            },
          },
          status: {
            connect: {
              id: statusId,
            },
          },
          produtos: {
            create: arrProdutos.map((produto, index) => ({
              quantidade: count[index],
              produtos: {
                connect: {
                  id: Number(produto),
                },
              },
            })),
          },
        },
      });
    },
  },
};
