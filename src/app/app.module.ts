import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DialogEditUserDetailsComponent } from './dialog-edit-user-details/dialog-edit-user-details.component';
import { CardUsersTotalComponent } from './card-users-total/card-users-total.component';
import { ProductsComponent } from './products/products.component';
import { CardUsersLastMonthComponent } from './card-users-last-month/card-users-last-month.component';
import { CardUsersLastWeekComponent } from './card-users-last-week/card-users-last-week.component';
import { DashboardUserDataComponent } from './dashboard-user-data/dashboard-user-data.component';
import { CardUsersTodayComponent } from './card-users-today/card-users-today.component';
import { DialogDeleteUserComponent } from './dialog-delete-user/dialog-delete-user.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { DialogAddOrderComponent } from './dialog-add-order/dialog-add-order.component';
import { TableProductsComponent } from './table-products/table-products.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableOrdersComponent } from './table-orders/table-orders.component';
import { TableCustomersComponent } from './table-customers/table-customers.component';
import { TableUserDetailOrdersComponent } from './table-user-detail-orders/table-user-detail-orders.component';
import { ChartUsersOverTimeComponent } from './chart-users-over-time/chart-users-over-time.component';
import { ChartOrdersOvertimeComponent } from './chart-orders-overtime/chart-orders-overtime.component';
import { CardOrdersLastWeekComponent } from './card-orders-last-week/card-orders-last-week.component';
import { DashboardSalesDataComponent } from './dashboard-sales-data/dashboard-sales-data.component';
import { CardOrdersTodayComponent } from './card-orders-today/card-orders-today.component';
import { CardOrdersLastMonthComponent } from './card-orders-last-month/card-orders-last-month.component';
import { CardOrdersTotalComponent } from './card-orders-total/card-orders-total.component';
import { CardRevenueTotalComponent } from './card-revenue-total/card-revenue-total.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ImprintComponent } from './legal/imprint/imprint.component';
import { PrivacyComponent } from './legal/privacy/privacy.component';
import { LoginComponent } from './start/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    DialogAddUserComponent,
    UserDetailComponent,
    DialogEditUserDetailsComponent,
    CardUsersTotalComponent,
    ProductsComponent,
    CardUsersLastMonthComponent,
    CardUsersLastWeekComponent,
    DashboardUserDataComponent,
    CardUsersTodayComponent,
    DialogDeleteUserComponent,
    ProductDetailsComponent,
    OrdersComponent,
    OrderDetailComponent,
    DialogAddOrderComponent,
    TableProductsComponent,
    TableOrdersComponent,
    TableCustomersComponent,
    TableUserDetailOrdersComponent,
    ChartUsersOverTimeComponent,
    ChartOrdersOvertimeComponent,
    CardOrdersLastWeekComponent,
    DashboardSalesDataComponent,
    CardOrdersTodayComponent,
    CardOrdersLastMonthComponent,
    CardOrdersTotalComponent,
    CardRevenueTotalComponent,
    ImprintComponent,
    PrivacyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
