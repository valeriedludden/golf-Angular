import { Component, OnInit } from '@angular/core';
import {Course} from "../course/course";
import {CourseService} from "../service/course.service";
import {Player} from "../model/player";

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.css']
})
export class EndGameComponent implements OnInit {

  get game(): Course{
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
  // diff: number;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.setValues();
  }

  setValues() {

    this.players = this.game.playerArray;
    this.holes = this.game.holeArray;
  }
  updateGame(){
    this.courseService.saveGame(this.courseService.game);
  }

  getInScore(scoreArray) {
    let total = 0;
    let sum = 0;
    for(let h = 10; h < 18; h++){
      sum = scoreArray[h];
      total += sum;
    }
    return total;
  }
  getOutScore(scoreArray: Array<number>) {
    let total = 0;
    let sum = 0;
    for(let h = 0; h < 9; h++){
      sum = scoreArray[h];
      total += sum;
    }
    return total;
  }

  getTotalScore(scoreArray: Array<number>) {
    let total = 0;
    let sum = 0;
    for(let h = 0; h < 18; h++){
      sum = scoreArray[h];
      total += sum;
    }
    return total;
  }
  getParComparison(scoreArray: Array<number>){
    let parTotal = this.game.parTotal;
    let total = this.getTotalScore(scoreArray);
    let diff = total - parTotal;
    return diff;
  }

  getMessage(scoreArray: Array<number>){
    let diff = this.getParComparison(scoreArray);

    if(diff < 2){
      return "Congratulations! You are ready for the PGA!";
    }
    if(diff < 10){
      return "Way to go! Single digits above par!"
    }
    if(diff < 20){
      return "Nice work! Practice makes perfect. ";
    }
    else {
      return "A bad day at golf is still better than a day at the office."
    }


  }
}
