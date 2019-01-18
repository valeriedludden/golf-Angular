import { Component, OnInit } from '@angular/core';
import { CourseService} from "../service/course.service";
import {Course} from "../course/course";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  get game(): Course{
    return this.courseService.game;
  }

  courseInfo: object;
  parTotal: number;
  yardTotal: number;


  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {
    this.courseService.getCourse(this.game.courseId)
      .subscribe(response => this.courseInfo = response['data']);
  }

}
