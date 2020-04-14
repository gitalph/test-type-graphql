import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Author } from "./Author";

@Entity()
@ObjectType()
export class Book extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  bookId!: number;

  @Field(() => String)
  @Column()
  name!: string;

  @Field(() => Number)
  @Column()
  pageCount!: number;

  @Field(() => Number)
  authorId!: number;

  @Field(type => Author)
  @ManyToOne(type => Author)
  @JoinColumn({ name: "authorId" })
  author!: Author;  
}
