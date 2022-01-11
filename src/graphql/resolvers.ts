import { mergeResolvers } from 'merge-graphql-schemas';
import categorias from './modules/categorias/resolvers';
import produtos from './modules/produtos/resolvers';
import formasPagamento from './modules/formasPagamento/resolvers';
import statusesPedido from './modules/statusesPedido/resolvers';

const resolversArray = [categorias, produtos, formasPagamento, statusesPedido];

export const resolvers = mergeResolvers(resolversArray);
