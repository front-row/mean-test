import { Product } from '../product/product';

export class Transaction {
    _id?: string;
    productEntries: ProductEntry[];
}

export class ProductEntry {
    productId: string;
    count: Number;
    product: Product;
}