import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  //coursesService: CoursesService;

  ngOnInit(): void {

  }

  constructor(private coursesService: CoursesService) {
    //this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list();

  }
}
