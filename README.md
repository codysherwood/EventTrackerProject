# EventTrackerProject

| HTTP Verb | URI             | Request Body | Response Body | Status |
|-----------|-----------------|--------------|---------------|---------|
| GET       | `/api/books`    |              | List of books | 200   |
| GET       | `/api/books/{id}` |              | Single book   | 200 or 404 |
| POST      | `/api/books`    | JSON of new book       | JSON of created book | 201 or 400 |
| PUT       | `/api/books/{id}` | JSON for updating book | JSON of updated book | 200, 404, or 400 |
| DELETE    | `/api/books/{id}` |              | | 204, 404, or 400 |