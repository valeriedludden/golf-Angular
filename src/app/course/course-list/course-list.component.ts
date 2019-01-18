import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Course} from "../course";
import {CourseService} from "../../service/course.service";
import {Player} from "../../models/player-interface";
import {async} from "rxjs/internal/scheduler/async";

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
  courseId: number;
  id: number;
  selectedTeeBox: any;
  hole: any;
  numPlayer: number;
  playerArray: Array<Player> = [];

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.getApi();
  }

  getApi() {
    this.apiResult = this.courseService.getCourseAPI()
      .subscribe(data => this.courseObject = data['courses']);
    return this.apiResult;
  }

  getCourseInfo() {
    return this.courseService.getCourse(this.courseId)
      .subscribe(response => this.course = response['data']);
  }

  getPlayerArray() {
    for (let i = 0; i < this.numPlayer; i++) {

      this.playerArray[i] = {
        name: '',
        hole: [0],
        inScore: 0,
        outScore: 0,
        totalScore: 0,
        parComparison: 0,
        id: i
      };
      console.log(this.playerArray);
    }
  }
}


