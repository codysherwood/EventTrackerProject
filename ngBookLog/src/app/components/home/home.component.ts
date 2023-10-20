import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];
  selected: Book | null = null;


  constructor(
    private bookService: BookService
  ){}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.index().subscribe({
      next: (bookList) => {
        this.books = bookList
      },
      error: (yikes) => {
        console.error('HomeComponen.loadBooks - error getting books');
        console.error(yikes);
      }
    })
  }

}
