
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Course} from "../course/course";
import {AngularFireDatabase, AngularFireObject, SnapshotAction} from "@angular/fire/database";
import {map} from "rxjs/operators";
import {Player} from "../model/player";
import {Hole} from "../model/hole";



@Injectable({
  providedIn: 'root'
})

export class CourseService {
  private gameRef: AngularFireObject<Course>;
  game: Course;
  newGame: boolean;

  private courseUrl = 'https://golf-courses-api.herokuapp.com/courses';

  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    this.gameRef = this.db.object<Course>(`game`);
  }

  getCourseAPI(): Observable<object> {
    return this.http.get<object>(this.courseUrl);
  }

  getCourse(id: number): Observable<object> {
    return this.http.get<object>(this.courseUrl + `/${id}`);
  }
  saveGame(game: Course){
    this.gameRef.set(game);
  }
  isNewGame (): boolean{
    return this.newGame = true;
}
  getGameObservable(game) {
    return this.gameRef.snapshotChanges()
      .pipe(
        map((item: SnapshotAction<Course>): Course => {
          return {
            courseId: item.payload.val().courseId,
            playerArray: item.payload.val().playerArray,
            teeType: item.payload.val().teeType,
            holeArray: item.payload.val().holeArray,
            parTotal: item.payload.val().parTotal,
            parInTotal: item.payload.val().parInTotal,
            parOutTotal: item.payload.val().parOutTotal,
            yardTotal: item.payload.val().yardTotal,
            hcpTotal: item.payload.val().hcpTotal
          } as Course;
        })
      );
  }
}


