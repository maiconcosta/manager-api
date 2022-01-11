export default `
  type StatusPedido {
    id: ID!
    nome: String!
  }

  type Query {
    statusesPedido: [StatusPedido!]!
  }

  input StatusPedidoCreateInput {
    nome: String
  }

  type Mutation {
    addStatusPedido(data: StatusPedidoCreateInput!): StatusPedido
  }
`;
