import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  },
}).listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at: http://localhost:4000`)
);
