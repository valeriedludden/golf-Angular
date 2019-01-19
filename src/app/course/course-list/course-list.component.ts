import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Course} from "../course";
import {CourseService} from "../../service/course.service";
import {async} from "rxjs/internal/scheduler/async";
import {Router} from "@angular/router";
import {Player} from "../../model/player";
import {Hole} from "../../model/hole";

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
  holeArray: Array<Hole> = [];

  constructor(private courseService: CourseService, private router: Router) {
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
        // hole: [0],
        inScore: 0,
        outScore: 0,
        totalScore: 0,
        parComparison: 0,
        id: i
      };
      console.log(this.playerArray);
    }
  }

  getHoleArray(){
    for (let i = 0; i < this.numPlayer; i++){
      this.holeArray[i] = {
        par: this.course['holes'][i]['teeBoxes'][this.selectedTeeBox].par,
      yards: this.course['holes'][i]['teeBoxes'][this.selectedTeeBox].yards,
      hcp: this.course['holes'][i]['teeBoxes'][this.selectedTeeBox].hcp,
      teeBox: this.selectedTeeBox
      };
      console.log("hole array" + this.holeArray);
    }
  }

  buildGame() {
    this.getHoleArray();
    this.courseService.game = {
      courseId: this.courseId,
      playerArray: this.playerArray,
      teeType: this.selectedTeeBox,
      holeArray: this.holeArray
    };
    this.courseService.saveGame(this.courseService.game);
    this.redirectToScoreCard();
  }
  redirectToScoreCard(){
// this.router.navigate(['score']);
  }
}

