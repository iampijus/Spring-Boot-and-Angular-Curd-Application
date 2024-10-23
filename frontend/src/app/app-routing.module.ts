import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'new-employee', component: NewEmployeeComponent },
  { path: 'view-employee/:id', component: ViewEmployeeComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
