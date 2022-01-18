import { mergeResolvers } from 'merge-graphql-schemas';

import categorias from './modules/categorias/resolvers';
import produtos from './modules/produtos/resolvers';
import formasPagamento from './modules/formasPagamento/resolvers';
import statusesPedido from './modules/statusesPedido/resolvers';
import enderecosCliente from './modules/enderecosCliente/resolvers';
import clientes from './modules/clientes/resolvers';
import pedidos from './modules/pedidos/resolvers';

const resolversArray = [
  categorias,
  produtos,
  formasPagamento,
  statusesPedido,
  enderecosCliente,
  clientes,
  pedidos,
];

export const resolvers = mergeResolvers(resolversArray);
