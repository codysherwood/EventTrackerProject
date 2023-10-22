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
  editBook: Book | null = null;
  newBook : Book = new Book();



  constructor(
    private bookService: BookService
  ){}

  ngOnInit(): void {
    this.reload();
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

  updateBook(book: Book) {
    this.bookService.update(book).subscribe({
      next: (book) =>{
        this.reload();
      },
      error: (param) => {
        console.error('BookListComponent.updateBook - error updating Book')
      }
    })
  }

  deleteBook(bookId: number) {
    this.bookService.destroy(bookId).subscribe({
      next: () => {
        this.reload();
      },
      error: (param) => {
        console.log('an error')
      }
    })
  }

  createBook(newBook: Book){
    this.bookService.createBook(newBook).subscribe({
      next: (book) => {
        this.newBook = new Book();
        this.reload();
      },
      error: (param) => {
        console.error('BookListCompnent.addBook - error creating Book: ')
      }
    })
  }

  reload() {
    this.bookService.index().subscribe({
      next: (bookList) => {
        this.books = bookList;
      },
      error: (param) => {
        console.error('BookListCompnent - error getting books: ');
        console.log('some error');
      },
    });
  }
}
