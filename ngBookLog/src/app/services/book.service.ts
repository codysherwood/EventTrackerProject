import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url = environment.baseUrl + 'api/books';

  constructor(private http: HttpClient) {}

  index(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('BookService.index(): error retrieving Book log: ' + err)
        );
      })
    );
  }

  show(bookId: number): Observable<Book> {
    return this.http.get<Book>(this.url + '/' + bookId).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('BookService.index(): error retrieving Book: ' + err)
        )
      })
    )
  }

  update(book: Book) {
    return this.http.put<Book>(this.url + '/' + book.id, book).pipe(
      catchError((err: any) => {
        console.log(err);
      return throwError(
        () => new Error('BookService.update(): error updating Book ' + err)
      )
      })
    )
  }

  destroy(bookId: number): Observable<void> {
    return this.http.delete<void>(this.url + "/" + bookId).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
          () => new Error ('BookService.delete: error deleting Book: ' + err )
        )
      }
      )
    )
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
          () => new Error('BookService.create(): error creating Book: ' + err)
        )
      })
    )
  }
  // create(todo: Todo): Observable<Todo> {
  //   todo.completed = false;
  //   todo.description = ''
  //   return this.http.post<Todo>(this.url, todo, this.getHttpOptions()).pipe(
  //     catchError((err: any) => {
  //       console.error(err);
  //       return throwError(
  //          () => new Error( 'TodoService.create(): error creating Todo: ' + err )
  //       );
  //     })
  //   );
  // }

}
