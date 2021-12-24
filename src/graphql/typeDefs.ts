import { mergeTypes } from 'merge-graphql-schemas';
import categorias from './modules/categorias/schema';
import produtos from './modules/produtos/schema';

const typesArray = [categorias, produtos];

export const typeDefs = mergeTypes(typesArray);
