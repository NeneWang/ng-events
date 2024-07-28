import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  studentId: number | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.studentId = params['id']; // Note the change here.

      console.log("Heyllo")
      console.log("Student ID", this.studentId);
      // Now, you can use this.studentId to load and display student-specific data.
    });
  }
}