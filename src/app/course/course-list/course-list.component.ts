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
  apiResult: any;
  coursePar: number;
  courseTee: number;
  courseId: number;
  id: number;
  resultCourse: any;
  info: any;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getApi();
  }

  getApi(){
    this.apiResult = this.courseService.getCourseAPI()
      .subscribe(data => this.courseObject = data['courses']);
    return this.apiResult;
  }

  getCourseInfo(id: number){
     id = this.courseId;
    return this.courseService.getCourse(id)
      .subscribe(response => this.course = response['data']['holes'][0]['teeBoxes']);
  }
  // display(){
  //   this.resultCourse = this.getCourseInfo(this.courseId);
  //   console.log(this.courseId + " ...after call");
  // }
  // getID(){
  //   return this.courseId;
  // }

  // getCourseInfo(id: number){
  //   this.result = this.courseService.getCourse(id)
  //     .subscribe(data => this.course = data['data']['holes'][0]['teeBoxes']);
  //   console.log(this.course + ' ...hole')
  // }
  displayCourses(){

  }
  // display(){
  //
  // }
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
