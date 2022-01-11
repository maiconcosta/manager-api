import { mergeResolvers } from 'merge-graphql-schemas';
import categorias from './modules/categorias/resolvers';
import produtos from './modules/produtos/resolvers';
import formasPagamento from './modules/formasPagamento/resolvers';

const resolversArray = [categorias, produtos, formasPagamento];

export const resolvers = mergeResolvers(resolversArray);
