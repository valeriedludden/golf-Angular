import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Course} from "../course";
import {CourseService} from "../../service/course.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses$: Observable<Course[]>;
  courseObject: object;
  course: object;
  result: any;
  coursePar: number;
  courseTee: number;
  id: number;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getApi();
    // console.log(this.courseObject);
  }

  getApi(){
    console.log(this.courseObject);
    console.log('get');

    this.result = this.courseService.getCourseAPI()
      .subscribe(data => this.courseObject = data['courses']);
    console.log(this.courseObject);
    return this.result;
  }
  display(){
    console.log(this.courseService.getCourse(this.id)
       .subscribe(data => this.courseObject = data['courses']));
    // console.log(this.result[]);
     console.log('hi');
     console.log('hello');

  }
  getCourseInfo(){

  }
  // getCourseId(){
  //   return this.
  // }
  // getCourse(id){
  //   console.log(this.course);
  //   return this.courseService.getCourse(id)
  //     .subscribe(response => this.course = response['data']);
  // }

  // getCourseById(id: number): any {
  //   let parent = this;
  //   this.courseService.getCourse(id).subscribe(
  //     function(res) {
  //       parent.setResult(res);
  //     }
  //   );
  //   return this.result;
  // }
  //
  // setResult(res: any) {
  //   this.result = res;
  // }
  // goToCharacter(characterId: string) {
  //   this.router.navigate([`/characters/${characterId}`]);
  // }

}
