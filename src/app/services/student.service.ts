import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Student[]> {​
    return this.http.get<Student[]>(`${environment.apiBaseUrl}/students`);
  }

  getById(id: number) : Observable<Student> {​
    return this.http.get<Student>(`${environment.apiBaseUrl}/students/${id}`)​;
  }
}
