import 'graphql-import-node';

import { mergeTypes } from 'merge-graphql-schemas';
import categorias from './modules/categorias/schema.graphql';
import produtos from './modules/produtos/schema.graphql';

const typesArray = [categorias, produtos];

export const typeDefs = mergeTypes(typesArray);
