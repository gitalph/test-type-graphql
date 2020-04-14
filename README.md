# test-type-graphql

## Installation

To run the app, run these command:

```bash
docker-compose up
```

## Playground example

```
mutation {
  createBook(
    data: {
		name: "b1",
    	pageCount: 11,
		authorName: "a1"
    }
  ) {
    bookId,
	name
  }
}

mutation {
  createBook(
    data: {
		name: "b2",
    	pageCount: 2,
		authorName: "a2"
    }
  ) {
    bookId,
	name
  }
}

mutation {
  createBook(
    data: {
		name: "b3",
    	pageCount: 3,
		authorName: "a1"
    }
  ) {
    bookId,
	name
  }
}

query {
  books
  {
    name,
    pageCount,
    authorId
    author {
      name
    }
  }
}
```
