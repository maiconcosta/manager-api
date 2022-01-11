import { mergeTypes } from 'merge-graphql-schemas';
import categorias from './modules/categorias/schema';
import produtos from './modules/produtos/schema';
import formasPagamento from './modules/formasPagamento/schema';
import statusesPedido from './modules/statusesPedido/schema';

const typesArray = [categorias, produtos, formasPagamento, statusesPedido];

export const typeDefs = mergeTypes(typesArray);
