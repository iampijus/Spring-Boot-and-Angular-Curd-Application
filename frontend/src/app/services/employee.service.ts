import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  //private apiURL = 'http://localhost:4200/assests/api/employees.json';
  private apiURL = 'http://localhost:8080/api/v1/employees';
  constructor(private http: HttpClient) {}

  getEmployeesList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiURL}`);
  }

  addEmployee(employee: Employee): Observable<any> {
    return this.http.post(`${this.apiURL}`, employee);
  }

  getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiURL}/${id}`);
  }

  updateEmployee(id: string, employee: Employee): Observable<Object> {
    return this.http.put(`${this.apiURL}/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<object> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
