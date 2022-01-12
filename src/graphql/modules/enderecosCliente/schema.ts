export default `
  type EnderecoCliente {
    id: ID!
    logradouro: String!
    numero: Int!
    bairro: String!
    cidade: String!
    estado: String!
    cep: String!
    complemento: String!
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
  }

  type Mutation {
    addEnderecoCliente(data: EnderecoClienteCreateInput!): EnderecoCliente
  }
`;
