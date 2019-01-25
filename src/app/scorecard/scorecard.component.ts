import {Component, OnChanges, OnInit, SimpleChanges, ɵNgOnChangesFeature} from '@angular/core';
import { CourseService} from "../service/course.service";
import {Course} from "../course/course";
import {Player} from "../model/player";
import {Observable} from "rxjs";

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit, OnChanges {

  // get game(): Course {
  //  return this.courseService.game;
  // }

  //courseInfo$: Observable<object>;
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
  // holeInfo$: Observable<any>;
  game: Course;

  constructor(private courseService: CourseService) {

  }

  ngOnInit() {
    // this.holeInfo$ = this.courseService.getCourseObservable();
    // this.courseService.getHoleObservable();
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

  // setHoleValues() {
  //
  //   this.courseInfo$. = this.getParTotal();
  //   this.courseInfo$.parInTotal = this.getParInTotal();
  //   this.courseInfo$.parOutTotal = this.getParOutTotal();
  //   this.courseInfo$.yardTotal = this.getYardTotal();
  //   this.courseInfo$.hcpTotal = this.getHcpTotal();
  //   this.players = this.courseInfo$.playerArray;
  //   this.holes = this.courseInfo$.holeArray;
  // }

  getParTotal() {
    let total = 0;
    let sum = 0;
    for (let i = 0; i < 18; i++) {
       sum = this.game.holeArray[i].par;
       total += sum;
    }
    console.log("par total = " + total);
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

    // getInScore(scoreArray: Array<number>) {
    //   let total = 0;
    //   let sum = 0;
    //   for(let h = 9; h < 18; h++){
    //     sum = scoreArray[h];
    //     total += sum;
    //   }
    //   return total;
    // }

    updateGame(){
    //this.getInScore()
      console.log("update game");
      this.courseService.saveGame(this.game);
    }



}




//
//
//
// //
// //
// //
// // get game(): Course {
// //   return this.courseService.game;
// //   //return this.game$;
// //   // return this.courseService.getGameObservable()
// //   //   .subscribe(response => this.courseInfo = response);
// //   // return this.game;
// // }
// // game$: Observable<Course>;
// // courseInfo: object;
// // parTotal: number = 0;
// // parInTotal: number = 0;
// // parOutTotal: number = 0;
// // yardTotal: number = 0;
// // hcpTotal: number = 0;
// // player: object;
// // players: Array<Player>;
// // id: number;
// // holes: Array<object>;
// // hole: any;
// // // game: Course;
// //
// //
// // constructor(private courseService: CourseService,
// //   private router: Router
// // ) {
// // }
// //
// // ngOnInit() {
// //   // this.courseInfo = this.courseService.getCourse(this.game.courseId)
// //   //   .subscribe(response => this.courseInfo = response['data']['holes']);
// //   this.game$ = this.courseService.getGameObservable(this.game.courseId);
// //   this.setCourseInfo();
// //   // this.setHoleValues();
// //
// // }
// //
// // setHoleValues() {
// //
// //   this.game.parTotal = this.getParTotal();
// //   this.game.parInTotal = this.getParInTotal();
// //   this.game.parOutTotal = this.getParOutTotal();
// //   this.game.yardTotal = this.getYardTotal();
// //   this.game.hcpTotal = this.getHcpTotal();
// //   this.players = this.game.playerArray;
// //   this.holes = this.game.holeArray;
// // }
// setCourseInfo() {
//   return this.courseRef.snapshotChanges()
//     .pipe(
//       map((item: SnapshotAction<Course>): Course => {
//         return {
//           name: item.payload.val().name,
//           id: item.payload.val().id,
//           teeChoice: item.payload.val().teeChoice,
//           holeArray: item.payload.val().holeArray,
//           holeIndex: item.payload.val().holeIndex,
//           playerArray: item.payload.val().playerArray
//         } as Course;
//       })
//     );
