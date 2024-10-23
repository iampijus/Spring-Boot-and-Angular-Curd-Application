import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';


@NgModule({
  declarations: [AppComponent, EmployeeListComponent, NewEmployeeComponent, UpdateEmployeeComponent, ViewEmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
