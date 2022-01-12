import { mergeTypes } from 'merge-graphql-schemas';
import categorias from './modules/categorias/schema';
import produtos from './modules/produtos/schema';
import formasPagamento from './modules/formasPagamento/schema';
import statusesPedido from './modules/statusesPedido/schema';
import enderecosCliente from './modules/enderecosCliente/schema';

const typesArray = [
  categorias,
  produtos,
  formasPagamento,
  statusesPedido,
  enderecosCliente,
];

export const typeDefs = mergeTypes(typesArray);
