import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-gst-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  angForm: FormGroup;
  siteKey: string;
  isCaptchaCheck: boolean = false;
  constructor(private fb: FormBuilder, private bs: StudentService) {
    this.siteKey = '6Ld-4d0ZAAAAAFXAazMmPIFDrLyWJg9RfHfZPb7X';
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ],
    });
  }

  addStudent(first_name, last_name) {
    this.bs.addStudent(first_name, last_name);
  }

  ngOnInit() {
  }
  
  // make sure recaptcha is checked before adding into the database
  handleSuccess(event: any) {
    this.isCaptchaCheck = true;
  }

}