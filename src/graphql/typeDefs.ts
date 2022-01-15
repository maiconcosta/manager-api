import { mergeTypes } from 'merge-graphql-schemas';

import categorias from './modules/categorias/schema';
import produtos from './modules/produtos/schema';
import formasPagamento from './modules/formasPagamento/schema';
import statusesPedido from './modules/statusesPedido/schema';
import enderecosCliente from './modules/enderecosCliente/schema';
import clientes from './modules/clientes/schema';

const typesArray = [
  categorias,
  produtos,
  formasPagamento,
  statusesPedido,
  enderecosCliente,
  clientes,
];

export const typeDefs = mergeTypes(typesArray);
