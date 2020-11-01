import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  uri = 'http://localhost:4000/student';

  constructor(private http: HttpClient) { }

  addStudent(first_name, last_name) {
    const obj = {
      first_name: first_name,
      last_name: last_name
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getStudent() {
    return this
           .http
           .get(`${this.uri}`);
  }

}
