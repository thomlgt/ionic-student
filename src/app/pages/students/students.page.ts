import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  public students : Student[];

  constructor(private service : StudentService, private router: Router) { }

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.students = data;
    });
  }

  ShowStudent(student : Student) {
    this.router.navigate(['/student/', student.id])
  }

}
