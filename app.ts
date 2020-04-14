import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { BookResolver } from "./resolvers/BookResolver";
import { Book } from "./models/Book";

async function main() {
  await createConnection({
      type: "mysql",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: false,
      entities: [
        Book
      ]
  });
  const schema = await buildSchema({ resolvers: [BookResolver] });
  const server = new ApolloServer({
    schema,
    introspection: true,
    playground: true
  });
  await server.listen(4000);
  console.log("Server has started!");
}

main();
