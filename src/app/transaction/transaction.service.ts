import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = environment.baseUrl + '/api/transaction/'

  constructor(private http: HttpClient) { }

  getTransactions(): Promise<void | Transaction[]> {
    return this.http.get(this.apiUrl)
               .toPromise()
               .then(response => response as Transaction[])
               .catch(this.handleError);
  }

  getTransaction(id: string): Promise<void | Transaction> {
    return this.http.get(this.apiUrl + id)
               .toPromise()
               .then(response => response as Transaction)
               .catch(this.handleError);
  }

  addTransaction(): Promise<void | Transaction> {
    return this.http.post(this.apiUrl, {})
               .toPromise()
               .then(response => response as Transaction)
               .catch(this.handleError);
  }

  deleteTransaction(id: string): Promise<void | boolean> {
    return this.http.delete(this.apiUrl + id)
               .toPromise()
               .then(response => response as boolean)
               .catch(this.handleError);
  }

  addProduct(transactionId: string, productId: string, quantity: Number): Promise<void | Transaction> {
    return this.http.post(this.apiUrl + transactionId + "/" + productId, { "quantity": quantity })
               .toPromise()
               .then(response => response as Transaction)
               .catch(this.handleError);
  }

  deleteProduct(transactionId: string, productId: string): Promise<void |  Transaction> {
    return this.http.delete(this.apiUrl + transactionId + "/" + productId)
               .toPromise()
               .then(response => response as Transaction)
               .catch(this.handleError);
  }

  editProductCount(transactionId: string, productId: string, quantity): Promise<void | Transaction> {
    return this.http.patch(this.apiUrl + transactionId + "/" + productId, { "quantity": quantity })
               .toPromise()
               .then(response => response as Transaction)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : 'Server error';
    console.error(errMsg);
  }
}
