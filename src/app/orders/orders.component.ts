import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orders = this.orderService.getOrders();
  }

  viewOrderDetails(orderId: number): void {
    // Implement logic to view order details, e.g., navigate to a details page
    console.log('View details for order with id:', orderId);
  }

  updateOrderStatus(orderId: number): void {
    const newStatus = 'Shipped'; // Example new status, you can implement logic to get new status
    this.orderService.updateOrderStatus(orderId, newStatus);
    this.loadOrders(); // Update orders list after status update
  }

  deleteOrder(orderId: number): void {
    this.orderService.deleteOrder(orderId);
    this.loadOrders(); // Update orders list after deletion
  }
}
