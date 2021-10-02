import "graphql-import-node";

import { mergeTypes } from "merge-graphql-schemas";
import categorias from "./modules/categorias/schema.graphql";
// import products from "./modules/products/schema.graphql";

const typesArray = [categorias];

export const typeDefs = mergeTypes(typesArray);
