import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { BookResolver } from "./resolvers/BookResolver";

async function main() {
  await createConnection({
      "type": "mysql",
      "host": "db",
      "port": 3306,
      "username": "test",
      "password": "test",
      "database": "test",
      "synchronize": true,
      "logging": false,
      "entities": [
        __dirname + '/models{.ts,.js}'
      ]
  });
  const schema = await buildSchema({ resolvers: [BookResolver] });
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log("Server has started!");
}

main();
