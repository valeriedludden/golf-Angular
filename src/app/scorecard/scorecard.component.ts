import { Component, OnInit, OnChanges } from '@angular/core';
import { CourseService} from "../service/course.service";
import {Course} from "../course/course";
import {Router} from "@angular/router";
import {Player} from "../model/player";

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  get game(): Course {
    return this.courseService.game;
  }

  courseInfo: object;
  parTotal: number = 0;
  parInTotal: number = 0;
  parOutTotal: number = 0;
  yardTotal: number = 0;
  hcpTotal: number = 0;
  player: object;
  players: Array<Player>;
  id: number;
  holes: Array<object>;
  hole: any;



  constructor(private courseService: CourseService,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.courseInfo = this.courseService.getCourse(this.game.courseId)
      .subscribe(response => this.courseInfo = response['data']['holes']);
    this.setHoleValues();
  }

  setHoleValues() {

    this.game.parTotal = this.getParTotal();
    this.game.parInTotal = this.getParInTotal();
    this.game.parOutTotal = this.getParOutTotal();
    this.game.yardTotal = this.getYardTotal();
    this.game.hcpTotal = this.getHcpTotal();
    this.players = this.game.playerArray;
    this.holes = this.game.holeArray;
  }

  getParTotal() {
    let total = 0;
    let sum = 0;
    for (let i = 0; i < 18; i++) {
       sum = this.game.holeArray[i].par;
       total += sum;
    }
    return total;
  }

  getParInTotal() {
    let total = 0;
    let sum = 0;
    for (let i = 9; i < 18; i++) {
      sum = this.game.holeArray[i].par;
      total += sum;
    }
    return total;
  }

  getParOutTotal() {
    let total = 0;
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum = this.game.holeArray[i].par;
      total += sum;
    }
    return total;
  }

  getYardTotal() {
    let total = 0;
    let sum = 0;
    for (let i = 0; i < 18; i++) {
      sum = this.game.holeArray[i].yards;
      total += sum;
    }
    return total;
  }

  getHcpTotal() {
    let total = 0;
    let sum = 0;
    for (let i = 0; i < 18; i++) {
      sum = this.game.holeArray[i].hcp;
      total += sum;
    }
    return total;
  }

    getInScore(scoreArray: Array<number>) {
console.log("begin array " + scoreArray);
      let total = 0;
      let sum = 0;
      for(let h = 0; h < 9; h++){
        sum = scoreArray[h];
        total += sum;
        console.log("in total " + total);
      }
      console.log("return total in " + total);
      return total;
    }
    updateGame(){
    //this.getInScore()
      this.courseService.saveGame(this.courseService.game);
    }

}
