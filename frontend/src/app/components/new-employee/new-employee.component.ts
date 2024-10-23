import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css'],
})
export class NewEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
        this.goToEmployeeListPage();
      },
      (err) => console.log(err)
    );
  }

  goToEmployeeListPage() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
}
