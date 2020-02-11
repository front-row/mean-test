import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
    private booksUrl = '/api/books';

    constructor (private http: HttpClient) {}

    getBooks(): Promise<void | Book[]> {
      return this.http.get(this.booksUrl)
                 .toPromise()
                 .then(response => response as Book[])
                 .catch(this.handleError);
    }

    createContact(newBook: Book): Promise<void | Book> {
      return this.http.post(this.booksUrl, newBook)
                 .toPromise()
                 .then(response => response as Book)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}
