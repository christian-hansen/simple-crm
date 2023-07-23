import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { TableCustomersComponent } from './table-customers/table-customers.component';
import { TableOrdersComponent } from './table-orders/table-orders.component';
import { TableProductsComponent } from './table-products/table-products.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: TableCustomersComponent },
  { path: 'user-old', component: UserComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'products', component: TableProductsComponent },
  { path: 'orders-old', component: OrdersComponent },
  { path: 'orders', component: TableOrdersComponent },
  { path: 'orders/:id', component: OrderDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
