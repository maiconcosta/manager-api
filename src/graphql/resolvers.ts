import { mergeResolvers } from 'merge-graphql-schemas';
import categorias from './modules/categorias/resolvers';
import produtos from './modules/produtos/resolvers';

const resolversArray = [categorias, produtos];

export const resolvers = mergeResolvers(resolversArray);
