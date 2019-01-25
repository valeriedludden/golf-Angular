import {Component, OnChanges, OnInit, SimpleChanges, ɵNgOnChangesFeature} from '@angular/core';
import { CourseService} from "../service/course.service";
import {Course} from "../course/course";
import {Player} from "../model/player";

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit, OnChanges {

  parTotal: number = 0;
  parInTotal: number = 0;
  parOutTotal: number = 0;
  yardTotal: number = 0;
  hcpTotal: number = 0;
  player: object;
  players: Player [];
  id: number;
  holes: Object[];
  hole: any;
  game: Course;

  constructor(private courseService: CourseService) {

  }

  ngOnInit() {
    this.courseService.getCourseObservable().subscribe(data => {
      this.game = data;
      this.setHoleValues();

    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.updateGame();
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

    updateGame(){
      this.courseService.saveGame(this.game);
    }

}
