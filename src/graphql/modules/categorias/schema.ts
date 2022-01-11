export default `
  type Categoria {
    id: ID!
    nome: String!
    produtos: [Produto!]
  }

  type Query {
    categorias: [Categoria!]!
  }

  input CategoriaCreateInput {
    nome: String
  }

  type Mutation {
    addCategoria(data: CategoriaCreateInput!): Categoria
  }
`;
