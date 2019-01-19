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
  parTotal: number = 0;
  parInTotal: number = 0;
  parOutTotal: number = 0;
  yardTotal: number = 0;
  inScoreTotal: number;
  outScoreTotal: number;
  palyerTotalScore: number;


  constructor(private courseService: CourseService,
              private router: Router
  ) { }

  ngOnInit() {
    this.courseInfo = this.courseService.getCourse(this.game.courseId)
      .subscribe(response => this.courseInfo = response['data']['holes']);
     this.setHoleValues();
  }

  setHoleValues(){
    this.parTotal = this.getParTotal();
    this.parInTotal = this.getParInTotal();
    this.parOutTotal = this.getParOutTotal();
    this.yardTotal = this.getYardTotal();
 }

  getParTotal() {
    let total = 0;
    for(let i = 0; i < 18; i++){
      total += this.game.holeArray[i].par;
    }
    return total;
  }
  getParInTotal(){
    let total = 0;
    for(let i = 9; i < 18; i++){
      total += this.game.holeArray[i].par;
    }
    return total;
  }

  getParOutTotal(){
    let total = 0;
    for(let i = 0; i < 9; i++){
      total += this.game.holeArray[i].par;
    }
    return total;
  }
  getYardTotal(){
    let total = 0;
    for(let i = 0; i < 18; i++){
      total += this.game.holeArray[i].yards;
    }
    return total;
  }
}
