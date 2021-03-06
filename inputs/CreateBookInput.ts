import { InputType, Field } from "type-graphql";

@InputType()
export class CreateBookInput {
  @Field()
  name!: string;

  @Field()
  pageCount!: number;
  
  @Field()
  authorName!: string
}
