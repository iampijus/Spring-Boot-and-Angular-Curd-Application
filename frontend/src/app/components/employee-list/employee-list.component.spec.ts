import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../employee';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let employeeService: EmployeeService;
  let router:Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should fetch employees on init', () => {
    const employees: Employee[] = [{ id: '1', firstName: 'John',lastName:"Doe",emailId:"john.doe@gmail.com" }, { id: '2', firstName: 'Jane',lastName:"Doe",emailId:"jane.doe@gmail.com" }];
    spyOn(employeeService, 'getEmployeesList').and.returnValue(of(employees));
    component.ngOnInit();
    expect(component.employees).toEqual(employees);
  });

  // it('should navigate to employee details page on view', () => {
  //   const routerSpy = spyOn(router, 'navigate');
  //   const employeeId = '1';
  //   component.viewEmployee(employeeId);
  //   expect(routerSpy).toHaveBeenCalledWith(['view-employee', employeeId]);
  // });
  
  // it('should navigate to update employee page on update', () => {
  //   const routerSpy = spyOn(router, 'navigate');
  //   const employeeId = '1';
  //   component.updateEmployee(employeeId);
  //   expect(routerSpy).toHaveBeenCalledWith(['update-employee', employeeId]);
  // });
});
