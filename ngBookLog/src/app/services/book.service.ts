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
}
