import { Component } from '@angular/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
@Component({
      selector: 'courses',
      template: `
        <h2>{{ "Title: "+ getTitle() }}</h2>
        <input type="text" autoGrow/>
        <ul>
          <li *ngFor="let course of courses">
          {{course}}
          </li>
        </ul>
        <ul>
          <li *ngFor="let coursename of coursesnames">
          {{coursename}}
          </li>
        </ul>
      `,
      providers: [CourseService],
      directives: [AutoGrowDirective]
})
export class CoursesComponent{
  title=" Courses";
  courses=["c1","c2","c3"];
  coursesnames;
  constructor(courseService: CourseService){
     this.coursesnames=courseService.getCoursesNames();
  }

  getTitle(){
    return this.title;
  }
}
