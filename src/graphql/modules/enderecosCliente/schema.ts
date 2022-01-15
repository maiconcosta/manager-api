import { gql } from 'apollo-server';

export default gql`
  type EnderecoCliente {
    id: ID
    logradouro: String
    numero: Int
    bairro: String
    cidade: String
    estado: String
    cep: String
    complemento: String
    cliente: Cliente
  }

  type Query {
    enderecosCliente: [EnderecoCliente!]!
  }

  input EnderecoClienteCreateInput {
    logradouro: String
    numero: Int
    bairro: String
    cidade: String
    estado: String
    cep: String
    complemento: String
    clienteId: Int
  }

  type Mutation {
    addEnderecoCliente(data: EnderecoClienteCreateInput!): EnderecoCliente
  }
`;
