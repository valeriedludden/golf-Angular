import {Player} from "../model/player";
import {Hole} from "../model/hole";


export interface Course {
  courseId: number;
  playerArray: Array<Player>;
  teeType: number;
  holeArray: Array<Hole>;

}
