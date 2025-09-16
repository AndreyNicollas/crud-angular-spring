import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'front-end'}
  ];
  displayedColumns = ['name', 'category'];

  //coursesService: CoursesService;

  ngOnInit(): void {
    this.courses = this.coursesService.list();

  }

  constructor(private coursesService: CoursesService) {
    //this.coursesService = new CoursesService();
  }
}
