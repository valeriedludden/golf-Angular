import { Component, OnInit } from '@angular/core';
import { CourseService} from "../service/course.service";
import {Course} from "../course/course";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {CourseListComponent} from "../course/course-list/course-list.component";

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  get game(): Course{
    return this.courseService.game;
  }

  //game: Course;
  courseInfo: object;
  parTotal: number;
  yardTotal: number;
  yards: number;
  par: number;
  holeArray: Array<object> = [];
  teeBoxes: Array<object> = [];
  inScoreTotal: number;
  outScoreTotal: number;


  constructor(private courseService: CourseService,
              private router: Router
              // private courseList: CourseListComponent
  ) { }

  ngOnInit() {
    //this.game = this.courseService.game;
    this.courseInfo = this.courseService.getCourse(this.game.courseId)
      .subscribe(response => this.courseInfo = response['data']['holes']);
     // this.setHoleValues();
    console.log("id " + this.game.courseId);
    console.log("par " + this.game.holeArray[0].par);
    //console.log("course Info " + this.courseInfo['data']);
  }

  // setHoleValues(){
  //   // this.parTotal = ;
  //   // this.yardTotal: number;
  //   // this.yards: number;
  //   // this.par: number;
  //   for(let i = 0; i < 18; i++){
  //   this.holeArray[i] = this.courseInfo[i].teeBoxes[this.game.teeType];
  //   }
  //   console.log("Hole array " + this.holeArray);
 // }

  // getParTotal(){
  //   let total;
  //   for(let i = 0; i < 18; i++){
  //     total = this.holeArray[i].teeBoxes[this.courseList.selectedTeeBox].par;
  //     total +=;
  //   }
  //   return total;
  // }

}
