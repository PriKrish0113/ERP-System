import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    { id: 1, name: 'Product 1', category: 'Category 1', price: 50, stockQuantity: 100 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 75, stockQuantity: 50 }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    // Generate a unique ID for the new product
    const newProductId = this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1;
    product.id = newProductId;
    this.products.push(product);
  }

  editProduct(productId: number, updatedProduct: Product): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products[index] = { ...updatedProduct, id: productId };
    }
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
