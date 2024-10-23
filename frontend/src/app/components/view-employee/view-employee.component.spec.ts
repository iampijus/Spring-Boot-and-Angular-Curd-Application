import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeComponent } from './view-employee.component';
import { of } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/employee';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
describe('ViewEmployeeComponent', () => {
  let component: ViewEmployeeComponent;
  let fixture: ComponentFixture<ViewEmployeeComponent>;
  let employeeService: EmployeeService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
// it('should fetch employee on init', () => {
//   const employee: Employee = { id: '1', firstName: 'John', lastName: "Doe", emailId: "john.doe@gmail.com" };
//   const route = { snapshot: { params: { id: '1' } } } as any as ActivatedRoute;
//   spyOn(employeeService, 'getEmployeeById').and.returnValue(of(employee));
//   component = new ViewEmployeeComponent(employeeService, route, router);
//   component.ngOnInit();
//   expect(component.employee).toEqual(employee);
// });

// it('should navigate to employee list on back', () => {
//   const routerSpy = spyOn(router, 'navigate');
//   component.goToEmployeeListPage();
//   expect(routerSpy).toHaveBeenCalledWith(['employees']);
// });
});
