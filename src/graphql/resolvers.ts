import { mergeResolvers } from "merge-graphql-schemas";
import categorias from "./modules/categorias/resolvers";

const resolversArray = [categorias];

export const resolvers = mergeResolvers(resolversArray);
