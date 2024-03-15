import { Component,OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { OrderService } from '../services/order.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  totalProducts: number = 0;
  totalOrders: number = 0;

  constructor(private productService: ProductService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.totalProducts = this.productService.getProducts().length;
    this.totalOrders = this.orderService.getOrders().length;
  }
}
