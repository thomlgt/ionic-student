import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  student : Student;

  constructor(private service : StudentService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.queryParams.subscribe(params => id = params);
    this.service.getById(id).subscribe(data => this.student = data);
  }

}
