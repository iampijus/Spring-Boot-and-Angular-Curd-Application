import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe((data) => {
      console.log(data);
      this.employees = data;
    });
  }

  viewEmployee(id: string) {
    this.router.navigate(['view-employee', id]);
  }

  updateEmployee(id: string) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(
      (data) => {
        console.log(data);
        this.getEmployees();
      },
      (err) => console.log(err)
    );
  }
}
