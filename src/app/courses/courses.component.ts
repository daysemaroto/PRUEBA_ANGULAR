import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  // selected: Course[] = [];
  arr: Array<{ id: number; text: string }> = [
    { id: 1, text: 'matematicas' },
    { id: 2, text: 'lenguaje' },
    { id: 3, text: 'geometria' },
  ];
  constructor() {}

  ngOnInit(): void {}

  getCourse() {
    return this.arr;
  }
}
