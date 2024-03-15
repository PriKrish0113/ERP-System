# Angular ERP System
This project is an ERP (Enterprise Resource Planning) system built using Angular. It provides functionalities to manage products, orders, and includes a dashboard with key metrics and a sales chart.

Features
Dashboard with key metrics such as total products, total orders, and a sales chart.
Products Management: Add, edit, delete products with details like name, category, price, and stock quantity.
Orders Management: View orders, order details, update order status, and delete orders.
Optional: Orders Calendar View to display orders based on expected delivery dates.
Technology Stack
Angular
TypeScript
Chart.js and ng2-charts for data visualization
Bootstrap for styling
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/angular-erp-system.git
Install dependencies:
bash
Copy code
cd angular-erp-system
npm install
Run the development server:
bash
Copy code
ng serve
Open your browser and navigate to http://localhost:4200/ to view the application.
Usage
Dashboard: View key metrics and sales chart.
Products Management: Manage products (add, edit, delete).
Orders Management: View orders, update order status, and delete orders.
Project Structure
src/app/components: Contains components for Dashboard, Products, and Orders.
src/app/services: Contains services for managing product and order data.
src/app/models: Contains TypeScript interfaces for data models.
