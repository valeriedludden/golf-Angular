
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {switchMap} from "rxjs/operators";
import {Course} from "../course/course";



@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private courseUrl = 'http://golf-courses-api.herokuapp.com/courses';

  constructor(private http: HttpClient) {

  }

  getCourseAPI(): Observable<object> {
    return this.http.get<object>(this.courseUrl);
  }

  getCourse(id: number): Observable<object> {
    return this.http.get<object>(this.courseUrl + `/${id}`);
  }
}
