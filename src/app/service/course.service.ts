
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Course} from "../course/course";
import {AngularFireDatabase, AngularFireObject} from "@angular/fire/database";



@Injectable({
  providedIn: 'root'
})

export class CourseService {
  private gameRef: AngularFireObject<Course>;
  game: Course;

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
}
