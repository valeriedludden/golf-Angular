import { Component, OnInit } from '@angular/core';
import {CourseService} from "../service/course.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }


}
