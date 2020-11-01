import { Component, OnInit } from '@angular/core';
import student from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-gst-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  students: student[];

  constructor(private bs: StudentService) { }

  ngOnInit() {
    this.bs
      .getStudent()
      .subscribe((data: student[]) => {
        this.students = data;
    });
  }
}
