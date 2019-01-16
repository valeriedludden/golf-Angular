import { Component, OnInit } from '@angular/core';
import { CourseService} from "../service/course.service";
import {Course} from "../course/course";
import {Observable} from "rxjs";

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  courses$: Observable<Course[]>;
  courseObject: object;
  numPlayers: number;
  course: object;
  id: number;
  selectedTeeBox: any;
  hole: any;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

}
