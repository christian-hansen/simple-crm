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

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { TableCustomersComponent } from './components/table-customers/table-customers.component';

import { CardOrdersLastMonthComponent } from './components/card-orders-last-month/card-orders-last-month.component';

import { LoginComponent } from './start/login/login.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { UserComponent } from './components/user/user.component';
import { DialogAddUserComponent } from './components/dialog-add-user/dialog-add-user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { DialogEditUserDetailsComponent } from './components/dialog-edit-user-details/dialog-edit-user-details.component';
import { CardUsersTotalComponent } from './components/card-users-total/card-users-total.component';
import { ProductsComponent } from './components/products/products.component';
import { CardUsersLastMonthComponent } from './components/card-users-last-month/card-users-last-month.component';
import { CardUsersLastWeekComponent } from './components/card-users-last-week/card-users-last-week.component';
import { DashboardUserDataComponent } from './components/dashboard-user-data/dashboard-user-data.component';
import { CardUsersTodayComponent } from './components/card-users-today/card-users-today.component';
import { DialogDeleteUserComponent } from './components/dialog-delete-user/dialog-delete-user.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { DialogAddOrderComponent } from './components/dialog-add-order/dialog-add-order.component';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { TableOrdersComponent } from './components/table-orders/table-orders.component';
import { TableUserDetailOrdersComponent } from './components/table-user-detail-orders/table-user-detail-orders.component';
import { ChartUsersOverTimeComponent } from './components/chart-users-over-time/chart-users-over-time.component';
import { ChartOrdersOvertimeComponent } from './components/chart-orders-overtime/chart-orders-overtime.component';
import { CardOrdersLastWeekComponent } from './components/card-orders-last-week/card-orders-last-week.component';
import { DashboardSalesDataComponent } from './components/dashboard-sales-data/dashboard-sales-data.component';
import { CardOrdersTodayComponent } from './components/card-orders-today/card-orders-today.component';
import { CardOrdersTotalComponent } from './components/card-orders-total/card-orders-total.component';
import { CardRevenueTotalComponent } from './components/card-revenue-total/card-revenue-total.component';
import { ImprintComponent } from './components/legal/imprint/imprint.component';
import { PrivacyComponent } from './components/legal/privacy/privacy.component';
import { DialogExplanationComponent } from './components/dialog-explanation/dialog-explanation.component';
import { CardUsersLastYearComponent } from './components/card-users-last-year/card-users-last-year.component';


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
    LoginComponent,
    DialogExplanationComponent,
    CardUsersLastYearComponent
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
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
