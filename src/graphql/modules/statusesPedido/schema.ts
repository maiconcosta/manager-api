import { gql } from 'apollo-server';

export default gql`
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
