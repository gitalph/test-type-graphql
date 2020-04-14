import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Book } from "../models/Book";
import { CreateBookInput } from "../inputs/CreateBookInput";

@Resolver()
export class BookResolver {
  @Query(() => [Book])
  books() {
    return Book.find();
  }

  @Query(() => Book)
  book(@Arg("bookId") bookId: number) {
    return Book.findOne({ where: { bookId } });
  }

  @Mutation(() => Book)
  async createBook(@Arg("data") data: CreateBookInput) {
    const book = Book.create(data);
    await book.save();
    return book;
  }

}