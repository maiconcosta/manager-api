import { gql } from 'apollo-server';

export default gql`
  type PedidoProduto {
    pedidoId: ID
    produtoId: ID
    quantidade: Int
    produto: Produto
  }

  type Pedido {
    id: ID!
    total: Float
    observacao: String
    prazoEntrega: String
    cliente: Cliente
    pagamento: FormaPagamento
    status: StatusPedido
    produtos: [PedidoProduto]
  }

  type Query {
    pedidos(skip: Int, take: Int): [Pedido!]!
  }

  input PedidoCreateInput {
    total: Float
    observacao: String
    prazoEntrega: String
    clienteId: Int
    statusId: Int
    pagamentoId: Int
    produtos: [ID]
  }

  type Mutation {
    addPedido(data: PedidoCreateInput!): Pedido
  }
`;
