import { gql } from 'apollo-server';

export default gql`
  type Cliente {
    id: ID!
    nome: String
    telefone: String
    endereco: [EnderecoCliente!]
  }

  type Query {
    clientes(skip: Int, take: Int, search: String): [Cliente!]!
  }

  input ClienteCreateInput {
    nome: String
    telefone: String
    endereco: EnderecoClienteCreateInput
  }

  type Mutation {
    addCliente(data: ClienteCreateInput!): Cliente
  }
`;
