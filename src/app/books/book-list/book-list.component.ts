import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {

  books: Book[]
  selectedBook: Book

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().then((books: Book[]) => {this.books = books});
  }

  private getIndexOfBook = (bookId: string) => {
    return this.books.findIndex((book) => { return book._id === bookId});
  }

  selectBook(book: Book) {
    this.selectedBook = book;
  }
}
