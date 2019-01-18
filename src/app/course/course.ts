import {Player} from "../model/player";


export interface Course {
  courseId: number;
  playerArray: Array<Player>;
  teeType: number;
}
