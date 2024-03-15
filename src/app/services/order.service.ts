import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: Order[] = [
    { orderId: 1, customerName: 'Customer 1', orderDate: '2024-03-10', status: 'Pending' },
    { orderId: 2, customerName: 'Customer 2', orderDate: '2024-03-09', status: 'Shipped' }
  ];

  getOrders(): Order[] {
    return this.orders;
  }

  getOrderById(orderId: number): Order | undefined {
    return this.orders.find(o => o.orderId === orderId);
  }

  updateOrderStatus(orderId: number, newStatus: string): void {
    const order = this.getOrderById(orderId);
    if (order) {
      order.status = newStatus;
    }
  }

  deleteOrder(orderId: number): void {
    this.orders = this.orders.filter(o => o.orderId !== orderId);
  }
}
