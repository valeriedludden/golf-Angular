import {Player} from "../models/player-interface";

export interface Course {
  id: number;
  playerArray?: Array<Player>;
  teeType: number;
}
