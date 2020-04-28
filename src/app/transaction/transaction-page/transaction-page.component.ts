import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router';
import { Product } from '../../product/product';
import { ProductEntry } from '../transaction';


@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.css'],
  providers: [TransactionService, ProductService]
})
export class TransactionPageComponent implements OnInit {

  private productIDs: string[]; // to easily keep track of which products are in cart
  searchResults: Product[];
  cart; // array of javascript objects with Product and count fields
  total; //total price of transaction.
  itemCount; //total number of items in transaction.
  showErr: Boolean;
  showElip: Boolean;
  
  constructor(
    private transactionService: TransactionService,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setup();
  }

  setup(){
    this.productIDs = [];
    this.cart = [];
    this.searchResults = [];
    this.showErr = false;
    this.showElip = false;
    this.update();
  }


  addProduct(product: Product){
    if(!this.productIDs.includes(product._id)){
      this.productIDs.push(product._id);
      let entry = {}
      entry['product'] = product;
      entry['count'] = 1;
	  entry['price'] = product.price;
      this.cart.push(entry);
	  this.update();
    }
  }

  removeProduct(product: Product){

    if(this.productIDs.includes(product._id)){
      
      for (var i=0; i < this.cart.length; i++){
        if(this.cart[i].product._id == product._id){
          this.cart.splice(i, 1);
          console.log('splice')
          break;
        }
        
      }

      // Note this is a REALLY BAD way to do this, should probably this.productIDs a dictonary
      this.productIDs.splice(this.productIDs.indexOf(product._id), 1);
	  this.update();
    }
  }

  setProductCount(product: Product, count: number){
    for (let entry of this.cart) {
      if(entry.product._id == product._id){
        entry.count = count;
        break;
      }
    }
	this.update();
  }

  searchProducts(search: string){
    this.productService.searchProducts(search)
      .then((products: Product[]) => {
        
        this.showErr = products.length == 0;
        this.showElip = products.length > 7; // if lots of results, add '...' to end
        if(this.showElip){
          products = products.splice(7)
        }

        this.searchResults = products;

      });
  }

  submit(){
    // convert cart object to list of product entries
    let entries = this.cart.map((val) =>{
      let entry = new ProductEntry()
      entry.count = val.count;
      entry.productId = val.product._id;
      return entry;
    })
    this.transactionService.addTransaction(entries);
    this.setup();
    return false;
  }
  
  update(){
    this.total = this.getPrice();
    this.itemCount = 0;
    for (let entry of this.cart)
	  {
		  this.itemCount += entry.count;
  	}
  }
  
  getPrice(){
	 let totalPrice = 0;
	 this.cart.forEach(function(item) {
		 totalPrice += item.product.price * item.count;
	 });
	 return totalPrice;
  }

  cancel(){
    this.setup();
  }

}
