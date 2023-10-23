# EventTrackerProject

## Overview
A full stack angualr project with CRUD operations. 

## Technologies Used
* MySQL
* MAMP
* JDBC
* Eclipse/Spring Tool Suite
* Git/GitHub
* Sublim
* HTML
* EC2
* JavaScript
* Angular

## Lessons Learned
* Angular Routing
* Click Events
* Implementing angular models, components and services

### Endpoints

| HTTP Verb | URI             | Request Body | Response Body | Status |
|-----------|-----------------|--------------|---------------|---------|
| GET       | `/api/books`    |              | List of books | 200   |
| GET       | `/api/books/{id}` |              | Single book   | 200 or 404 |
| POST      | `/api/books`    | JSON of new book       | JSON of created book | 201 or 400 |
| PUT       | `/api/books/{id}` | JSON for updating book | JSON of updated book | 200, 404, or 400 |
| DELETE    | `/api/books/{id}` |              | | 204, 404, or 400 |

#### Json

```javascript
{
	"id": 1,
    "title": "The Way of Kings",
    "numberOfWords": 383389,
    "imageUrl": "https://c8.alamy.com/comp/BBYJDM/open-book-cut-out-BBYJDM.jpg",
    "dateFinished": "2010-10-10" 
}
```