import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [];
  newProduct: Product = { id: 0, name: '', category: '', price: 0, stockQuantity: 0 };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = this.productService.getProducts();
  }

  addProduct(): void {
    this.productService.addProduct(this.newProduct);
    this.newProduct = { id: 0, name: '', category: '', price: 0, stockQuantity: 0 };
    this.loadProducts(); // Update product list after addition
  }

  editProduct(productId: number): void {
    // Implement editing logic here, e.g., open a modal with product details for editing
    console.log('Edit product with id:', productId);
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId);
    this.loadProducts(); // Update product list after deletion
  }
}
