export default `
  type FormaPagamento {
    id: ID!
    nome: String!
  }

  type Query {
    formasPagamento: [FormaPagamento!]!
  }

  input FormaPagamentoCreateInput {
    nome: String
  }

  type Mutation {
    addFormaPagamento(data: FormaPagamentoCreateInput!): FormaPagamento
  }
`;
