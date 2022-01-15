import { gql } from 'apollo-server';

export default gql`
  type Produto {
    id: ID!
    nome: String
    valor: Float
    ativo: Boolean
    imagem: String
    categoria: Categoria
  }

  type Query {
    produtos(
      skip: Int
      take: Int
      categoriaId: Int
      search: String
    ): [Produto!]!
  }

  input ProdutoCreateInput {
    nome: String
    valor: Float
    ativo: Boolean
    imagem: String
    categoriaId: Int
  }

  type Mutation {
    addProduto(data: ProdutoCreateInput!): Produto
  }
`;
