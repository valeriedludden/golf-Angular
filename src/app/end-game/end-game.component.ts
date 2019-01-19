import { Component, OnInit } from '@angular/core';
import {Course} from "../course/course";
import {CourseService} from "../service/course.service";

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.css']
})
export class EndGameComponent implements OnInit {

  get game(): Course{
    return this.courseService.game;
  }

  constructor(private courseService: CourseService) { }

  ngOnInit() {

  }


}
