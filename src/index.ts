import { ApolloServer } from 'apollo-server';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  },
  introspection: true,
})
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => {
    console.log(`🚀 Server ready at: ${url}`);
  });
