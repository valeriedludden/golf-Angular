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

  // player: object;
  players: Array<Player>;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.setValues();
  }

  setValues(){
    this.players = this.game.playerArray;
  }
  getInScore(scoreArray) {
    console.log('start');
    let total = 0;
    let sum = 0;
    for(let h = 0; h < 9; h++){
      sum = scoreArray[h];
      total += sum;
    }
    console.log("in score function");
    console.log("total " + total);
    return total;
  }

}
