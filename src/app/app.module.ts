import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CounterComponent } from './counter/counter.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SquarePipe } from './square.pipe';
import { EnclosePipe } from './enclose.pipe';
import { SpydemoComponent } from './spydemo/spydemo.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CounterComponent,
    ProductListComponent,
    LoginComponent,
    SquarePipe,
    EnclosePipe,
    SpydemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
