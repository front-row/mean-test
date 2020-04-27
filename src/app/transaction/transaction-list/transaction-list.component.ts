import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
  providers: [TransactionService]
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[];

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.transactionService.getTransactions()
      .then((transactions: Transaction[]) => {
        this.transactions = transactions; 
      });
  }

}
