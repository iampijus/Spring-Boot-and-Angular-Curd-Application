import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeComponent } from './update-employee.component';
import {of} from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/employee';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

describe('UpdateEmployeeComponent', () => {
  let component: UpdateEmployeeComponent;
  let fixture: ComponentFixture<UpdateEmployeeComponent>;
  let employeeService: EmployeeService;
  let router:Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should fetch employee on init', () => {
  //   const employee: Employee = { id: '1', firstName: 'John',lastName:"Doe",emailId:"john.doe@gmail.com" };
  //   const route = { snapshot: { params: { id: '1' } } } as any as ActivatedRoute;
  //   spyOn(employeeService, 'getEmployeeById').and.returnValue(of(employee));
  //   component = new UpdateEmployeeComponent(employeeService, route, router);
  //   component.ngOnInit();
  //   expect(component.employee).toEqual(employee);
  // });
  
  // it('should update employee on submit', () => {
  //   const employee: Employee = { id: '1', firstName: 'John',lastName:"Doe",emailId:"john.doe@gmail.com" };
  //   spyOn(employeeService, 'updateEmployee').and.returnValue(of(employee));
  //   component.employee = employee;
  //   component.onSubmit();
  //   expect(employeeService.updateEmployee).toHaveBeenCalledWith(employee.id,employee);
  // });
  
  // it('should navigate to employee list after submit', () => {
  //   const routerSpy = spyOn(router, 'navigate');
  //   const employee: Employee = { id: '1', firstName: 'John',lastName:"Doe",emailId:"john.doe@gmail.com" };
  //   spyOn(employeeService, 'updateEmployee').and.returnValue(of(employee));
  //   component.employee = employee;
  //   component.onSubmit();
  //   expect(routerSpy).toHaveBeenCalledWith(['employees']);
  // });
});
