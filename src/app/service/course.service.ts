
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Course} from "../course/course";
import {AngularFireDatabase, AngularFireObject, SnapshotAction} from "@angular/fire/database";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class CourseService {
  game: Course;

  private courseUrl = 'https://golf-courses-api.herokuapp.com/courses';

  constructor(private http: HttpClient, private db: AngularFireDatabase) {

  }

  getCourseAPI(): Observable<object> {
    return this.http.get<object>(this.courseUrl);
  }

  getCourse(id: number): Observable<object> {
    return this.http.get<object>(this.courseUrl + `/${id}`);
  }

  saveGame(game: Course) {
    this.db.object<Course>(`game`).set(game);
  }

  getCourseObservable() {
    return this.db.object<Course>(`game`).snapshotChanges()
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

