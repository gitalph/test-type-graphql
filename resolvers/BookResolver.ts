import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Book } from "../models/Book";
import { Author } from "../models/Author";
import { CreateBookInput } from "../inputs/CreateBookInput";

@Resolver()
export class BookResolver {
  @Query(() => [Book])
  async books() {
    const allBooks = await Book.find({ relations: ["author"] });
    return allBooks.map((book: Book) => ({
      authorId: book.author.authorId,
      ...book
    }))
  }

  @Mutation(() => Book)
  async createBook(@Arg("data") data: CreateBookInput) {
    const { authorName, ...bookData } = data;
    let author = await Author.findOne({
      where: { name: authorName }
    });
    if (!author) {
      author = Author.create({
        name: authorName
      });
      await author.save();
    }
    const book = Book.create({
      ...bookData,
      author
    });
    await book.save();
    return book;
  }

}