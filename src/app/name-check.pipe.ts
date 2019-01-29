import { Pipe, PipeTransform } from '@angular/core';
import {Player} from "./model/player";
import {CourseService} from "./service/course.service";
import {Course} from "./course/course";

@Pipe({
  name: 'nameCheck'
})
export class NameCheckPipe implements PipeTransform {

  game: Course;
  playerArray = [];

  constructor(private courseService: CourseService){
  this.courseService.getCourseObservable().subscribe(data => {
      this.game = data;
      this.playerArray = this.game.playerArray;
    })
  }

  transform(value: Player): any {
    for (let i = 0; i < this.playerArray.length; i++) {
      for (let v = 0; v < this.playerArray.length; v++) {
        if (i != v ) {
          if (value[i].name == this.playerArray[v].name) {
            this.courseService.game.playerArray[i].name = value[i].name + (i + 1);
          }
        }
      }

    }
    this.courseService.saveGame(this.courseService.game);
    return value;
  }
}
