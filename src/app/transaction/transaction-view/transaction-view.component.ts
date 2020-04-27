import { Component, OnInit, Input } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../transaction';
import { Product } from 'src/app/product/product';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.css']
})
export class TransactionViewComponent implements OnInit {
  @Input() id: string;
  transaction: any;
  columnsToDisplay = ['Product', 'Quantity'];

  constructor(
    private transactionService: TransactionService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.transaction = {}
   }

  ngOnInit(): void {
    if(this.id) {
      this.transactionService.getTransaction(this.id)
        .then((transaction: any) => {
          this.transaction._id = transaction._id;
          this.transaction.productEntries = transaction.products;
          this.transaction.productEntries.forEach((item) => {
            this.productService.getProduct(item.productId)
              .then((product : Product) => {
                item.product = product;
              })
          })
        })
    }
  }

}
