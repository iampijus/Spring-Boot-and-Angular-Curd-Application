import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmployeeComponent } from './new-employee.component';

import{of} from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/employee';
import { Router } from '@angular/router';

describe('NewEmployeeComponent', () => {
  let component: NewEmployeeComponent;
  let fixture: ComponentFixture<NewEmployeeComponent>;
  let employeeService: EmployeeService;
  let router:Router;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create a new employee on save', () => {
  //   const employee: Employee = { id: '1', firstName: 'John',lastName:"Doe",emailId:"john.doe@gmail.com" };
  //   spyOn(employeeService, 'addEmployee').and.returnValue(of(employee));
  //   component.employee = employee;
  //   component.saveEmployee();
  //   expect(employeeService.addEmployee).toHaveBeenCalledWith(employee);
  // });
  
  // it('should navigate to employee list after save', () => {
  //   const routerSpy = spyOn(router, 'navigate');
  //   const employee: Employee = { id: '1', firstName: 'John',lastName:"Doe",emailId:"john.doe@gmail.com" };
  //   spyOn(employeeService, 'addEmployee').and.returnValue(of(employee));
  //   component.employee = employee;
  //   component.saveEmployee();
  //   expect(routerSpy).toHaveBeenCalledWith(['employees']);
  // });
});
