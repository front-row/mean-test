import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionViewComponent } from './transaction-view/transaction-view.component';



@NgModule({
  declarations: [TransactionListComponent, TransactionViewComponent],
  imports: [
    CommonModule
  ]
})
export class TransactionModule { }
